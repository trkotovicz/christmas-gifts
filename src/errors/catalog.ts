import { StatusCodes } from 'http-status-codes';

export enum ErrorTypes {
  GenericError = 'GenericError',
  BadRequest = 'BadRequest',
  UnauthorizedError = 'UnauthorizedError',
  CategoryNotFound = 'CategoryNotFound',
  EbookNotInCatalog = 'EbookNotInCatalog',
  ApiKeyNotFound = 'ApiKeyNotFound',
}

interface ErrorResponseObject {
  message: string;
  httpStatus: number;
}

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject;
};

export const errorCatalog: ErrorCatalog = {
  GenericError: {
    message: 'Internal error',
    httpStatus: StatusCodes.INTERNAL_SERVER_ERROR,
  },
  BadRequest: {
    message: 'Something wrong happened',
    httpStatus: StatusCodes.BAD_REQUEST,
  },
  UnauthorizedError: {
    message: 'Unauthorized user',
    httpStatus: StatusCodes.UNAUTHORIZED,
  },
  CategoryNotFound: {
    message: 'Category not found',
    httpStatus: StatusCodes.UNAUTHORIZED,
  },
  EbookNotInCatalog: {
    message: 'Sorry, this Ebook is not available',
    httpStatus: StatusCodes.NOT_FOUND,
  },
  ApiKeyNotFound: {
    message: 'API Key not provided',
    httpStatus: StatusCodes.BAD_REQUEST,
  },
};
