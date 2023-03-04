declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
}

declare module "*.jpg" {
  export const content: string;
}

declare module "*.png" {
  export const content: string;
}

declare module "*.json" {
  export const content: string;
}
