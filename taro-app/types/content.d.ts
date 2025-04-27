type CategoryVO = {
  id: number
  name: string
  cover: string
  createTime: string
}

type NoteVO = {
  id: number
  userId: number
  title: string
  content: string
  tags: string[]
  createTime: string
}
