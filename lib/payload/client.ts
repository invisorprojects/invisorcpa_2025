import { getPayload } from 'payload';
import config from '@/payload.config';

type PayloadClient = Awaited<ReturnType<typeof getPayload>>;

let payload: PayloadClient | null = null;
let payloadPromise: Promise<PayloadClient> | null = null;

async function initializePayload() {
    let lastError: unknown;

    for (let attempt = 1; attempt <= 3; attempt += 1) {
        try {
            return await getPayload({ config });
        } catch (error) {
            lastError = error;

            if (attempt < 3) {
                console.warn(
                    `Payload initialization attempt ${attempt} failed; retrying.`
                );
                await new Promise((resolve) =>
                    setTimeout(resolve, attempt * 250)
                );
            }
        }
    }

    throw lastError;
}

export async function getPayloadClient() {
    if (payload) return payload;

    if (!payloadPromise) {
        payloadPromise = initializePayload()
            .then((initializedPayload) => {
                payload = initializedPayload;
                return initializedPayload;
            })
            .finally(() => {
                payloadPromise = null;
            });
    }

    return payloadPromise;
}
