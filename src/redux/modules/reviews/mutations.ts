import { gql } from "@apollo/client";

export const UPDATE_REVIEW_BY_ID = gql`
  mutation UpdateMovieReviewById(
    $id: UUID!
    $movieReviewPatch: MovieReviewPatch!
  ) {
    updateMovieReviewById(
      input: { movieReviewPatch: $movieReviewPatch, id: $id }
    ) {
      movieReview {
        id
        title
        body
        rating
        userByUserReviewerId {
          name
        }
      }
    }
  }
`;

export const CREATE_REVIEW_MUTATION = gql`
  mutation CreateMovieReview($input: CreateMovieReviewInput!) {
    createMovieReview(input: $input) {
      movieReview {
        id
      }
    }
  }
`;
