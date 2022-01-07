import { paginationAction } from "./pagination-slice";

export const setPageData = (pageItems) => paginationAction.setPageItems(pageItems);

export const firstPage = () => paginationAction.firstPage();
export const previousPage = () => paginationAction.previousPage();
export const nextPage = () => paginationAction.nextPage();
export const lastPage = (payload) => paginationAction.lastPage(payload);
