interface ISocialMedia {
    id:number;
    name:string;
    title:string;
    type: string;
    url: string;
}

interface IMain {
    socialMedias: ISocialMedia[]
}