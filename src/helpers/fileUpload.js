export const fileUpload = async (file) => {

    const cloudUrl = import.meta.env.VITE_CLOUDINARY_URL;

    const formData = new FormData();
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if (!resp.ok) throw new Error('Failed to upload file');

        const cloudResp = await resp.json();
        
        return cloudResp.secure_url;

    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}