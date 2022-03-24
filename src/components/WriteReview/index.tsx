import type { ChangeEvent, FormEvent } from "react";
import { Button, Tooltip, TextField, Card, CardContent } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { styles } from "./WriteReview.style";

type ReviewEditProps = {
  formContent: {
    body: string;
    title: string;
    rating: number;
  };
  handleShowEdit: () => void;
  handleSubmitReview: (e: FormEvent<HTMLFormElement>) => void;
  handleFormEdit: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFormEditRating: (rating: number) => void;
};

export default function CreateReview(props: ReviewEditProps) {
  const {
    formContent,
    handleShowEdit,
    handleSubmitReview,
    handleFormEdit,
    handleFormEditRating,
  } = props;

  return (
    <Card css={styles.root}>
      <CardContent css={styles.content}>
        <form onSubmit={handleSubmitReview} css={styles.form}>
          <TextField
            label="Review Title"
            
            name="title"
            placeholder="Write A Title"
            sx={{ minWidth: "260px" }}
            onChange={handleFormEdit}
          />
          <br />
          <TextField
            label="Review Body"
            
            css={styles.textArea}
            name="body"
            placeholder="Write A Body"
            sx={{ minWidth: "260px" }}
            //onChange={handleFormEdit}
            multiline
            rows={4}
          />
          <div css={styles.ratings}>
            <label>Rating:</label>
            {[1, 2, 3, 4, 5].map((rating) => (
              <Tooltip
                key={rating}
                title={`${rating} Star${rating === 1 ? "" : "s"}`}
                arrow
              >
                <StarIcon
                  onClick={() => handleFormEditRating(rating)}
                  style={{
                    color: rating ? "#ffc107" : "#ccc7b8",
                  }}
                />
              </Tooltip>
            ))}
          </div>
          <div css={styles.buttons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleShowEdit}
            >
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
