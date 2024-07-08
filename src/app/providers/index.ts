import compose from "compose-function";
import { WithRedux } from "./with-redux";
import { WithStyledEngine } from "./with-styled-engine";

export const withProviders = compose(WithRedux, WithStyledEngine);