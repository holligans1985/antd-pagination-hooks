export interface Pagination {
    total: number,
    pageSize: number,
    current: number,
    offset:number,
    loading:boolean
  } 

export interface TableItem{
      key: string,
      picture: string,
      age: number,
      name: string,
      lastname: string,
      gender: string,
  }

export interface TableData{
    data:TableItem[] | [],
    error: boolean,
    loading:boolean,
  }

  export interface Query{
    offset:number,
    limit:number,
  }



