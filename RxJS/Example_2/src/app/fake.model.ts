export interface Fake{
    "id":number;
    "email":string;
    "first_name":string;
    "last_name":string;
    "avatar":string;
}

interface I1{
    "url":string;
    "text":string;

}

interface FakeData{
    "page":number;
    "per_page":number;
    "total":number;
    "total_pages":number;
    "data":Fake[],
    "support":I1
}

export default FakeData;