export default function ZoomSchedulerEmbed() {
    return (
        <section className="flex h-screen items-center justify-center bg-[#EFF0F4] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-24">
            <div style={{ width: '1280px', height: '800px' }}>
                <iframe
                    src="https://scheduler.zoom.us/ajith-kumar-k8qhd7/invisortax?embed=true"
                    style={{ width: '100%', height: '100%' }}
                    allow="camera; microphone; fullscreen; speaker"
                    title="Zoom Scheduler"
                />
            </div>
        </section>
    );
}
