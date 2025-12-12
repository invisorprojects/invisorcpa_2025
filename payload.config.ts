import { postgresAdapter } from '@payloadcms/db-postgres';
import {
    FixedToolbarFeature,
    lexicalEditor,
} from '@payloadcms/richtext-lexical';
import path from 'path';
import { buildConfig, SharpDependency } from 'payload';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { uploadthingStorage } from '@payloadcms/storage-uploadthing';

import { Users } from './collections/Users/config';
import { Media } from './collections/Media/config';
import { BlogPosts } from './collections/BlogPosts/config';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    // cors: '*',
    admin: {
        user: Users.slug,
        importMap: {
            baseDir: path.resolve(dirname),
        },
        autoLogin:
            process.env.NODE_ENV === 'development'
                ? {
                      email: process.env.ADMIN_EMAIL || '',
                      password: process.env.ADMIN_PASSWORD || '',
                      prefillOnly: true,
                  }
                : false,
    },
    collections: [Users, Media, BlogPosts],
    editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
            ...defaultFeatures,
            FixedToolbarFeature(),
        ],
    }),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || '',
        },
    }),
    sharp: sharp as SharpDependency,
    plugins: [
        uploadthingStorage({
            collections: {
                media: true,
            },
            options: {
                token: process.env.UPLOADTHING_TOKEN,
                acl: 'public-read',
            },
            clientUploads: true,
        }),
    ],
});
