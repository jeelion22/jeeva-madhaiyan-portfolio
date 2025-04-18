import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import moment from "moment";
import innotrat_products from "../../assets/IL_LinkedIn Banner.png";
import white_logo from "../../assets/White-Logo-1.1.png";
export default function ExperienceCard() {
  const isMobile = useMediaQuery("(max-width:414px)");

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent
          className="card-content"
          sx={{
            backgroundColor: "silver", // or remove this line
            minHeight: "300px",

            p: 3,
          }}
        >
          <Typography
            gutterBottom
            sx={{
              color: "text.secondary",
            }}
          >
            <Link
              href="https://innotrat.com/"
              target="_blank"
              rel="noopener"
              underline="hover"
              sx={{ fontWeight: 500 }} // styling link directly
            >
              Innotrat Labs India Pvt. Ltd.
            </Link>
          </Typography>

          <Typography variant="h5" component="div" color="black">
            Fullstack Developer Intern (MERN)
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            {`${moment("6 Jan 2025").format("ll")} - ${moment(
              "15 Apr 2025"
            ).format("ll")}`}
          </Typography>

          <List dense>
            {[
              "Strengthened my skills in the MERN stack and explored new libraries/tools.",
              "Gained a clear, practical understanding of the software development life cycle.",
              "Collaborated with UI/UX, embedded, and backend engineers, expanding my teamwork perspective.",
              "Worked independently on embedded product ideas, boosting my confidence and ownership.",
              "Gained hands-on experience in embedded systems and AI-powered tools within live projects.",
            ].map((text, index) => (
              <ListItem key={index} sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <CheckCircleIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
}
