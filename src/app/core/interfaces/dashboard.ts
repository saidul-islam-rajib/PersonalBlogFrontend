export interface Dashboard {
  postId: string;
  postTitle: string;
  postAbstract: string;
  conclusion: string;
  readingMinute: number;
  userId: string;
  topicIds: Array<{
    topicId: string;
    topicTitle: string;
    userId: string;
  }>;
  createdDateTime: Date;
  updatedDateTime: Date
}
