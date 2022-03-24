import type { ChangeEvent, FormEvent } from "react";
import { Button, Tooltip, TextField, Card } from "@mui/material";
//import StarIcon from "@mui/icons-material/Star";
import { styles } from "./WriteReview.style";



export default function WriteReview() {

  return (
    <Card>
      <form>
        <TextField
          label="Review Title"
          value=""
          name="title"
          sx={{ minWidth: "260px" }}
        />
        <br />
        <TextField
          label="Review Body"
          value=""
          name="body"
          sx={{ minWidth: "260px" }}
          multiline
          rows={4}
        />
        <div>
          <label>Rating:</label>
        </div>
        <div>
          <Button variant="contained" color="secondary">
            Cancel
          </Button>
          <Button variant="contained" type="submit">
            Update
          </Button>
        </div>
      </form>
    </Card>
  );
}
