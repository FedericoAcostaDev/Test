import { gql } from "@apollo/client";

export const GET_REVIEW_BY_MOVIE_ID = gql`
  query movieById($id: UUID!) {
    movieById(id: $id) {
      id
      title
      releaseDate
      movieDirectorByMovieDirectorId {
        name
      }
      movieReviewsByMovieId {
        nodes {
          id
          body
          userByUserReviewerId {
            name
          }
          rating
          title
        }
      }
    }
  }
`;


