export interface Post {
  postId: string;
  postTitle: string;
  postAbstract: string;
  sections: PostSection[];
  topicIds: PostTopic[];
  userId: string;
  createdDateTime: string;
  updatedDateTime: string;
}

export interface PostSection {
  sectionId: string;
  sectionTitle: string;
  sectionDescription: string;
  items: SectionItem[];
}

export interface SectionItem {
  itemId: string;
  itemTitle: string;
  itemDescription: string;
  itemImageLink: string;
}

export interface PostTopic {
  topicId: string;
  name: string;
}
