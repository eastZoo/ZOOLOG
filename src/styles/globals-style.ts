import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
${normalize}

html,
body {
  padding: 0;
  margin: 0;
  font-size: 10px;
  font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  letter-spacing: -0.5px;
}

a {
  color: inherit;
  text-decoration: none;
}

p {
  padding: 0;
  margin: 0;
}

ul, li {
  padding: 0;
  margin: 0; 
  list-style: none;
}

* {
  box-sizing: border-box;
}

.err-message {
  color: red;
  font-size: 1.1rem;
}


// 리액트 캘린더
.react-calendar {
  width: 300px;
  max-width: 100%;
  background: white;
  font-family: 'Noto Sans KR', 'Roboto', sans-serif;
  line-height: 1.125em;
}

.react-calendar--doubleView {
  width: 700px;
}

.react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  margin: -0.5em;
}

.react-calendar--doubleView .react-calendar__viewContainer > * {
  width: 50%;
  margin: 0.5em;
}

.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.react-calendar button:enabled:hover {
  cursor: pointer;
  background: ${(props) => props.theme.colors.btnprimary};
  border: none;
}

.react-calendar__navigation {
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  border: none;
  /* border-bottom: 1px solid ${(props) =>
    props.theme.colors.chartBorderInner}; */
  padding-bottom: 20px;
}

.react-calendar__navigation__arrow {
  background: none;
  border: none;
}

.react-calendar__navigation__label {
    background: ${(props) => props.theme.colors.btnprimary};
    border-radius: 20px;
    border-top: ${(props) => props.theme.colors.chartBorderInner};
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.4rem;
    font-weight: 500;
    border: none;
    padding: 10px;
}

.react-calendar__navigation button:disabled {
  background-color: #f0f0f0;
}

.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
  background: ${(props) => props.theme.colors.btnprimary};
}

.react-calendar__month-view__weekdays {
  display: none;
  visibility: hidden;
  width: 0; 
  height: 0; 
  font-size: 0; 
  line-height: 0;
}

.react-calendar__month-view__weekdays__weekday {
  padding: 0.5em;
}

.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75em;
  font-weight: bold;
}

.react-calendar__month-view__days__day--weekend {
  color: #d10000;
}

.react-calendar__month-view__days__day--neighboringMonth {
  color: #757575;
}

.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 2em 0.5em;
}

.react-calendar__tile {
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 100%;
  background: none;
  line-height: 16px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.chartBorderInner};
  
  &.react-calendar__month-view__days__day {
    height: 130px;
  }
}

.react-calendar__tile:disabled {
  background-color: #f0f0f0;
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background-color: #e6e6e6;
}

.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: #a9d4ff;
}

.react-calendar__tile--active {
  background: #fef5f5;

}

.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: #fef5f5;
}

.react-calendar--selectRange .react-calendar__tile--hover {
  background-color: #e6e6e6;
}

.react-calendar { 
 width: 100%;
 height: 100%;
 max-width: 100%;
 font-family: 'Noto Sans KR', 'Roboto', sans-serif;
 line-height: 1.125em;
}

abbr{
  font-size: 1.4rem;
  font-weight: 500;
  text-align: start;
}
`;
