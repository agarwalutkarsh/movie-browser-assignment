// Helper functions for common function to call inside the whole application

import { BASE_PIC_URL } from "./Env"

// Image url generation
export const imageUrlGenerator = (path) => {
    return `${BASE_PIC_URL}${path}`
}