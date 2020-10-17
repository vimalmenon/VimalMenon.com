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
interface IAboutMeDetail {
    title:string;
    subTitle:string;
    details:string[];
}
interface IAboutMe {
    videoLink:string;
    detail:IAboutMeDetail;
}