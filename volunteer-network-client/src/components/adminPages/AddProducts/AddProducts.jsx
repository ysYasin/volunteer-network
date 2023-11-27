import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Swal from "sweetalert2";

const AddVolenteers = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    const form = e.target;
    const title = form.eventTitle.value;
    const date = form.eventDate.value;
    const description = form.eventDescription.value;
    const img = form.eventImage.value;

    const new_Event = { title, date, description, img };
    console.log(new_Event);

    fetch("http://localhost:5300/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_Event),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Uploaded!",
            text: "new event is uploaded",
            icon: "Success",
            confirmButtonText: "Thanks",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="mt-28 py-20 px-16 bg-base-200">
      <form onSubmit={handleSubmit} className="">
        <Grid container spacing={2}>
          {/* First Row */}
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Event Title"
              variant="outlined"
              name="eventTitle"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Event Date"
              type="date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              name="eventDate"
              required
            />
          </Grid>

          {/* Second Row */}
          <Grid item xs={12}>
            <TextareaAutosize
              className="bg-base-200 border-2"
              aria-label="Description"
              placeholder="Event Description"
              minRows={3}
              maxRows={5}
              style={{ width: "100%", resize: "none" }}
              name="eventDescription"
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Image URL"
              variant="outlined"
              name="eventImage"
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={6}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddVolenteers;
