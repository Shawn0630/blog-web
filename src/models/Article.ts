export interface ArticleProfile {
    _id: string,
    author: string,
    category: [],
    comments: [],
    create_time: string,
    desc: string,
    id: number,
    img_url: string,
    numbers: number,
    keyword: [],
    like_users: [],
    meta: ArticleMetaData,
    origin: 0,
    state: 1,
    tags: [],
    title: string,
    update_time: string,
}

export interface ArticleDetail {
    profile: ArticleProfile,
    content: string,
}

export interface ArticleMetaData {
    views: number;
    likes: number;
    comments: number;
}