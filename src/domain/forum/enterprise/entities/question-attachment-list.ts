import { WatchedList } from '@/core/entities/watched-lists'
import { QuestionAttachment } from './question-attachment'

export class QuestionAttachmentList extends WatchedList<QuestionAttachment> {
  compareItems(a: QuestionAttachment, b: QuestionAttachment): boolean {
    return a.attachmentId.equals(b.attachmentId)
  }
}
