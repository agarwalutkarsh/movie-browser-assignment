import { BASE_PIC_URL } from "./Env"

export const imageUrlGenerator = (path) => {
    return `${BASE_PIC_URL}${path}`
}