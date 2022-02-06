
async function initGPU(canvasName: string) {
    const canvas = document.getElementById(canvasName) as HTMLCanvasElement;
    const adapter = await navigator.gpu.requestAdapter() as GPUAdapter;
    const device = await adapter.requestDevice() as GPUDevice;
    const context = canvas.getContext("webgpu") as unknown as GPUCanvasContext;
    const width = canvas.width;
    const height = canvas.height;
    console.log(width);
    console.log(height);

    const swapChainFormat = "bgra8unorm";
    context.configure({
        device: device,
        format: swapChainFormat,
    });

    return {canvas, width, height, device, context, swapChainFormat}
}

function createBuffer(device:GPUDevice, data:Float32Array,
    usageFlag:GPUBufferUsageFlags = 32 | 8) { // 32 GPUBufferUsage.VERTEX || 8 GPUBufferUsage.COPY_DST
        const buffer = device.createBuffer({
            size: data.byteLength,
            usage: usageFlag,
            mappedAtCreation: true
        })
        new Float32Array(buffer.getMappedRange()).set(data);
        buffer.unmap();
        return buffer;
}

function createIntBuffer(device:GPUDevice, data: Int32Array,
    usageFlag: GPUBufferUsageFlags = 32 | 8) { // 32 GPUBufferUsage.VERTEX || 8 GPUBufferUsage.COPY_DST
        const buffer = device.createBuffer({
            size: data.byteLength,
            usage: usageFlag,
            mappedAtCreation: true
        })
        new Int32Array(buffer.getMappedRange()).set(data);
        buffer.unmap();
        return buffer;
}

function CheckWebGPU() {
    let result = "Great, your current browser supports WebGPU!";
    if (!navigator.gpu) {
        result = "Your current browser does not support WebGPU";
    }
    return result;
}

export { initGPU, createBuffer, createIntBuffer, CheckWebGPU }