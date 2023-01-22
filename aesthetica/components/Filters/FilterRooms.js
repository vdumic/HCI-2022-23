import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

const Filter = () => {
  return (
    <div className="flex justify-start w-1/6">
      <div className="mx-24">
        <p className="font-bold text-2xl mb-6">Filters</p>
        <div className="w-[200px] h-[280px] bg-white flex justify-start">
          <div className="mx-6 mt-4 w-full">
            <p className="text-xl font-semibold mb-2">Price</p>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  label="< €100"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  label="€10-€2500"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  label="€2500-€500"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  label="€500-€1000"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  label="€1000 >"
                />
              </FormGroup>
            </div>
          </div>
        </div>
        <div className="w-[200px] h-[320px] bg-white flex justify-start mt-6">
          <div className="mx-6 mt-4 w-full">
            <p className="text-xl font-semibold mb-2">Color</p>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  label="White"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  label="Black"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  label="Gray"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  size="small"
                  color="default"
                  label="Green"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  size="small"
                  color="default"
                  label="Blue"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  size="small"
                  color="default"
                  label="Brown"
                />
              </FormGroup>
            </div>
          </div>
        </div>
        <div className="w-[200px] h-[200px] bg-white flex justify-start my-6">
          <div className="mx-6 mt-4 w-full">
            <p className="text-xl font-semibold mb-2">Availability</p>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  label="In Stock"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  label="Pre-Order"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#6B7280",
                        "&.Mui-checked": {
                          color: "#6B7280",
                        },
                      }}
                    />
                  }
                  label="Bespoke"
                />
              </FormGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
