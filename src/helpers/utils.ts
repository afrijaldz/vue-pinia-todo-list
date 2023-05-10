export const generateId = (): number => Math.round(Math.random() * 1000)

export const verifyId = (ids: number[], id: number): boolean => ids.some((i) => i === id)

export const generateUniqueId = (ids: number[]): number => {
  const id = generateId()

  const isIdDuplicate = verifyId(ids, id)

  if (isIdDuplicate) return generateUniqueId(ids)

  return id
}
