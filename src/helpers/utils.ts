export const generateId = (): number => Math.round(Math.random() * 1000)

export const verifyId = (ids: number[], id: number): boolean => ids.some((i) => i === id)
