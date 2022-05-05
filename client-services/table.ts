import axios from 'axios'

const baseUrl = '/api/table'

export function upload(file: File) {
    var formData = new FormData();
    formData.append("file", file);

    axios.post(baseUrl, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}