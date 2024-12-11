export interface Dashboard {
  postId: string;
  postTitle: string;
  postAbstract: string;
  userId: string;
  topicIds: Array<{
    topicId: string;
    topicTitle: string;
    userId: string;
  }>;
  createdDateTime: Date;
  updatedDateTime: Date
}
