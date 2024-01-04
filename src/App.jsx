import dayjs from "dayjs";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CiCalendarDate } from "react-icons/ci";
import "dayjs/locale/es";
import "./App.css";

dayjs.locale("es");

function App() {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2024-01-18T12:00:00").toDate(),
      end: dayjs("2024-01-18T13:00:00").toDate(),
      title: "Evento 1",
      data: {
        x: 10,
      },
    },
    {
      start: dayjs("2024-01-23T12:00:00").toDate(),
      end: dayjs("2024-01-24T12:00:00").toDate(),
      title: "Evento 1",
      data: {
        x: 20,
      },
    },
  ];

  const components = {
    event: (props) => {
      const { data } = props.event;

      if (data.x > 15) {
        return (
          <div style={{ background: "red" }}>
            <CiCalendarDate />
            {props.title}
          </div>
        );
      } else {
        return (
          <div style={{ background: "green" }}>
            <CiCalendarDate />
            {props.title}
          </div>
        );
      }
    },
  };

  return (
    <div style={{ height: "95vh", width: "70vw" }}>
      <Calendar
        localizer={localizer}
        events={events}
        views={["month", "week", "day"]}
        date={dayjs("2024-01-19T12:00:00").toDate()}
        defaultView="month"
        min={dayjs("2024-01-23T08:00:00").toDate()}
        max={dayjs("2024-01-23T18:00:00").toDate()}
        formats={{
          dayHeaderFormat: (date) => {
            return dayjs(date).format("DD/MM/YYYY");
          },
        }}
        components={components}
      />
    </div>
  );
}

export default App;
