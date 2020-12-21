import { bw } from "@beamwind/play";
import React from "react";

export const PlayButton = (props) => (
  <svg
    {...props}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.20307 1.04312C1.00481 0.954998 0.77234 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568116 1.75196L3.92115 7.50002L0.568116 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.77234 13.9952 1.00481 14.045 1.20307 13.9569L14.7031 7.95692C14.8836 7.87667 15 7.69761 15 7.50002C15 7.30242 14.8836 7.12336 14.7031 7.04311L1.20307 1.04312ZM4.84552 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22091 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22091 7.10002 9 7.10002H4.84552Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

export function SettingsIcon(props) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M7.07.65a.85.85 0 00-.828.662l-.238 1.05c-.38.11-.74.262-1.08.448l-.91-.574a.85.85 0 00-1.055.118l-.606.606a.85.85 0 00-.118 1.054l.574.912c-.186.338-.337.7-.447 1.079l-1.05.238a.85.85 0 00-.662.829v.857a.85.85 0 00.662.829l1.05.238c.11.379.261.74.448 1.08l-.575.91a.85.85 0 00.118 1.055l.607.606a.85.85 0 001.054.118l.911-.574c.339.186.7.337 1.079.447l.238 1.05a.85.85 0 00.829.662h.857a.85.85 0 00.829-.662l.238-1.05c.38-.11.74-.26 1.08-.447l.911.574a.85.85 0 001.054-.118l.606-.606a.85.85 0 00.118-1.054l-.574-.911c.187-.34.338-.7.448-1.08l1.05-.238a.85.85 0 00.662-.829v-.857a.85.85 0 00-.662-.83l-1.05-.237c-.11-.38-.26-.74-.447-1.08l.574-.91a.85.85 0 00-.118-1.055l-.606-.606a.85.85 0 00-1.055-.118l-.91.574a5.323 5.323 0 00-1.08-.448l-.239-1.05A.85.85 0 007.928.65h-.857zM4.92 3.813a4.476 4.476 0 011.795-.745L7.071 1.5h.857l.356 1.568c.659.116 1.268.375 1.795.744l1.36-.857.607.606-.858 1.36c.37.527.628 1.136.744 1.795l1.568.356v.857l-1.568.355a4.475 4.475 0 01-.744 1.796l.857 1.36-.606.606-1.36-.857a4.476 4.476 0 01-1.795.743L7.928 13.5h-.857l-.356-1.568a4.475 4.475 0 01-1.794-.744l-1.36.858-.607-.606.858-1.36a4.476 4.476 0 01-.744-1.796L1.5 7.93v-.857l1.568-.356a4.476 4.476 0 01.744-1.794L2.954 3.56l.606-.606 1.36.858zM9.026 7.5a1.525 1.525 0 11-3.05 0 1.525 1.525 0 013.05 0zm.9 0a2.425 2.425 0 11-4.85 0 2.425 2.425 0 014.85 0z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function BackButton(props) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M6.854 3.146a.5.5 0 010 .708L3.707 7H12.5a.5.5 0 010 1H3.707l3.147 3.146a.5.5 0 01-.708.708l-4-4a.5.5 0 010-.708l4-4a.5.5 0 01.708 0z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Reload(props) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M1.85 7.5c0-2.835 2.21-5.65 5.65-5.65 2.778 0 4.152 2.056 4.737 3.15H10.5a.5.5 0 000 1h3a.5.5 0 00.5-.5v-3a.5.5 0 00-1 0v1.813C12.296 3.071 10.666.85 7.5.85 3.437.85.85 4.185.85 7.5c0 3.315 2.587 6.65 6.65 6.65 1.944 0 3.562-.77 4.714-1.942a6.77 6.77 0 001.428-2.167.5.5 0 10-.925-.38 5.77 5.77 0 01-1.216 1.846c-.971.99-2.336 1.643-4.001 1.643-3.44 0-5.65-2.815-5.65-5.65z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function VerticalDots(props) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M8.625 2.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm0 5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM7.5 13.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Close(props) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M11.782 4.032a.575.575 0 10-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 00-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 00.814.814L7.5 8.313l3.469 3.469a.575.575 0 00.813-.814L8.313 7.5l3.469-3.468z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ForwardButton(props) {
  return (
    <svg viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M8.146 3.146a.5.5 0 01.708 0l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L11.293 8H2.5a.5.5 0 010-1h8.793L8.146 3.854a.5.5 0 010-.708z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export const Graphql = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      viewBox="0 0 29.999 30"
      fill="currentColor"
    >
      <path d="M4.08 22.864l-1.1-.636L15.248.98l1.1.636z" />
      <path d="M2.727 20.53h24.538v1.272H2.727z" />
      <path d="M15.486 28.332L3.213 21.246l.636-1.1 12.273 7.086zm10.662-18.47L13.874 2.777l.636-1.1 12.273 7.086z" />
      <path d="M3.852 9.858l-.636-1.1L15.5 1.67l.636 1.1z" />
      <path d="M25.922 22.864l-12.27-21.25 1.1-.636 12.27 21.25zM3.7 7.914h1.272v14.172H3.7zm21.328 0H26.3v14.172h-1.272z" />
      <path d="M15.27 27.793l-.555-.962 10.675-6.163.555.962z" />
      <path d="M27.985 22.5a2.68 2.68 0 0 1-3.654.981 2.68 2.68 0 0 1-.981-3.654 2.68 2.68 0 0 1 3.654-.981c1.287.743 1.724 2.375.98 3.654M6.642 10.174a2.68 2.68 0 0 1-3.654.981A2.68 2.68 0 0 1 2.007 7.5a2.68 2.68 0 0 1 3.654-.981 2.68 2.68 0 0 1 .981 3.654M2.015 22.5a2.68 2.68 0 0 1 .981-3.654 2.68 2.68 0 0 1 3.654.981 2.68 2.68 0 0 1-.981 3.654c-1.287.735-2.92.3-3.654-.98m21.343-12.326a2.68 2.68 0 0 1 .981-3.654 2.68 2.68 0 0 1 3.654.981 2.68 2.68 0 0 1-.981 3.654 2.68 2.68 0 0 1-3.654-.981M15 30a2.674 2.674 0 1 1 2.674-2.673A2.68 2.68 0 0 1 15 30m0-24.652a2.67 2.67 0 0 1-2.674-2.674 2.67 2.67 0 1 1 5.347 0A2.67 2.67 0 0 1 15 5.347" />
    </svg>
  );
};

export function ASTButton(props) {
  return (
    <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M5 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm.713 1.164a2.5 2.5 0 110-2.328l3.391-2.12A2.5 2.5 0 1114 3.5a2.5 2.5 0 01-4.484 1.52l-3.53 2.207a2.526 2.526 0 010 .546l3.53 2.206a2.5 2.5 0 11-.411.804l-3.392-2.12zM11.5 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Logo(props) {
  return (
    <svg viewBox="0 0 640 640" width={640} height={640} {...props}>
      <defs>
        <path
          d="M634.94 127.45c0 56.98-46.84 103.24-104.53 103.24s-104.53-46.26-104.53-103.24S472.72 24.21 530.41 24.21s104.53 46.26 104.53 103.24z"
          id="a"
        />
        <path
          d="M115.83 441.96c0 30.88-24.81 55.96-55.38 55.96-30.57 0-55.39-25.08-55.39-55.96 0-30.89 24.82-55.96 55.39-55.96s55.38 25.07 55.38 55.96z"
          id="b"
        />
        <path
          d="M336.43 314.51c0 52.32-42.48 94.8-94.8 94.8-52.31 0-94.79-42.48-94.79-94.8 0-52.31 42.48-94.79 94.79-94.79 52.32 0 94.8 42.48 94.8 94.79z"
          id="c"
        />
        <path
          d="M67.98 230.69l427.36 340.92 77.45-80.59C325.76 324.65 163.1 218.63 84.82 172.96 6.54 127.29.92 146.53 67.98 230.69z"
          id="d"
        />
        <path
          d="M634.94 512.55c0 56.98-46.84 103.24-104.53 103.24s-104.53-46.26-104.53-103.24 46.84-103.24 104.53-103.24 104.53 46.26 104.53 103.24z"
          id="e"
        />
        <path
          d="M120.86 191.16c0 31.63-25.95 57.3-57.9 57.3s-57.9-25.67-57.9-57.3c0-31.63 25.95-57.31 57.9-57.31s57.9 25.68 57.9 57.31z"
          id="f"
        />
        <path d="M478.11 120.24h104.6v399.52h-104.6V120.24z" id="g" />
        <path
          d="M77.39 404.87L504.74 63.95l77.46 80.59C335.16 310.91 172.51 416.93 94.22 462.6c-78.28 45.67-83.89 26.43-16.83-57.73z"
          id="h"
        />
      </defs>
      <use xlinkHref="#a" fill="currentColor" />
      <use xlinkHref="#b" fill="currentColor" />
      <use xlinkHref="#c" fill="currentColor" />
      <use xlinkHref="#d" fill="currentColor" />
      <use xlinkHref="#e" fill="currentColor" />
      <use xlinkHref="#f" fill="currentColor" />
      <use xlinkHref="#g" fill="currentColor" />
      <use xlinkHref="#h" fill="currentColor" />
    </svg>
  );
}

export function Check(props) {
  return (
    <svg
      viewBox="0 0 333 333"
      x="0px"
      y="0px"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      {...props}
    >
      <path d="M129 191c-13-12-34-34-48-48-14-13-23-2-40 16-19 19 0 29 27 56l49 49c18 16 33-8 57-31l98-99c31-30 38-30 13-54-22-23-21-23-56 13-16 15-95 95-100 98z" />
    </svg>
  );
}

export function Tree(props) {
  return (
    <svg x="0px" y="0px" viewBox="0 0 100 100" {...props}>
      <path
        fill="currentColor"
        d="M80.375 51.605c-1.975 0-3.82.549-5.407 1.489l-6.47-6.47a10.623 10.623 0 003.083-7.487c0-5.878-4.782-10.66-10.66-10.66-2.061 0-3.98.597-5.612 1.614l-6.466-6.466a10.61 10.61 0 002.893-7.278c0-5.878-4.782-10.66-10.66-10.66s-10.66 4.782-10.66 10.66c0 2.731 1.041 5.217 2.735 7.105l-6.515 6.515a10.577 10.577 0 00-5.407-1.489c-5.878 0-10.66 4.782-10.66 10.66s4.782 10.66 10.66 10.66 10.66-4.782 10.66-10.66c0-2.817-1.107-5.376-2.898-7.284l6.465-6.465a10.585 10.585 0 005.62 1.619 10.58 10.58 0 005.414-1.493l6.512 6.512a10.604 10.604 0 00-2.741 7.111c0 2.817 1.106 5.374 2.897 7.282l-6.675 6.675a10.577 10.577 0 00-5.407-1.489c-5.878 0-10.66 4.782-10.66 10.66 0 1.958.54 3.789 1.465 5.368l-6.848 6.848a10.577 10.577 0 00-5.407-1.489c-5.878 0-10.66 4.782-10.66 10.66s4.782 10.66 10.66 10.66 10.66-4.782 10.66-10.66c0-2.818-1.107-5.376-2.898-7.284l6.371-6.371a10.599 10.599 0 0014.337.269l6.101 6.101a10.61 10.61 0 00-2.898 7.284c0 5.878 4.782 10.66 10.66 10.66s10.66-4.782 10.66-10.66-4.782-10.66-10.66-10.66c-1.975 0-3.819.549-5.407 1.489l-6.496-6.496a10.583 10.583 0 001.68-5.72c0-2.818-1.107-5.376-2.898-7.284l6.675-6.674a10.586 10.586 0 0010.575.147l6.527 6.527a10.612 10.612 0 00-2.898 7.284c0 5.878 4.782 10.66 10.66 10.66s10.66-4.782 10.66-10.66-4.784-10.66-10.662-10.66zm-59.147-5.807c-3.673 0-6.66-2.987-6.66-6.66s2.987-6.66 6.66-6.66 6.66 2.987 6.66 6.66-2.988 6.66-6.66 6.66zm13.186-29.45c0-3.673 2.987-6.66 6.66-6.66s6.66 2.987 6.66 6.66-2.987 6.66-6.66 6.66-6.66-2.987-6.66-6.66zM19.625 90.313c-3.673 0-6.66-2.987-6.66-6.66s2.987-6.66 6.66-6.66 6.66 2.987 6.66 6.66-2.987 6.66-6.66 6.66zm21.449-21.387c-3.673 0-6.66-2.987-6.66-6.66s2.987-6.66 6.66-6.66 6.66 2.987 6.66 6.66-2.987 6.66-6.66 6.66zm27.543 14.726c0 3.673-2.987 6.66-6.66 6.66s-6.66-2.987-6.66-6.66 2.987-6.66 6.66-6.66 6.66 2.987 6.66 6.66zM54.26 39.138c0-3.673 2.987-6.66 6.66-6.66s6.66 2.987 6.66 6.66-2.987 6.66-6.66 6.66-6.66-2.987-6.66-6.66zm26.115 29.788c-3.673 0-6.66-2.987-6.66-6.66s2.987-6.66 6.66-6.66 6.66 2.987 6.66 6.66-2.987 6.66-6.66 6.66z"
      />
    </svg>
  );
}

export function Helmet(props) {
  return (
    <svg
      viewBox="0 0 846.66 846.66"
      x="0px"
      y="0px"
      fillRule="evenodd"
      clipRule="evenodd"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      {...props}
    >
      <path
        fill="currentColor"
        d="M732.77 654.14v145.82H113.87V654.14c0-68.52 16.96-125.4 45.21-170.89-32.76-22.31-135.29-104.64-69.97-224.59C148.34 149.93 220.16 98.99 323.43 46.71c-13.43 30-26.81 60.01-40.32 89.96-57.67 127.76-81.16 179.83-34.5 203.92l53.13 27.42c76.44-28.82 164.65-28.32 241.28.97l55.01-28.39c46.67-24.09 23.17-76.16-34.49-203.92-13.52-29.95-26.9-59.96-40.33-89.96 103.27 52.28 175.1 103.22 234.32 211.95 66.04 121.25-39.46 204.06-71.02 225.3 28.89 45.52 46.26 102.29 46.26 170.18zM587.6 390.11c28.27 16.25 53.96 37.02 75.61 62.32 22.52-14.7 111.38-80.52 59.9-175.02-34.08-62.6-78.77-106.51-113.53-134.13 60.86 135.41 82.11 193.12 6.42 232.18l-28.4 14.65zm-405.57 61.4c21.41-25.47 46.85-46.3 74.93-62.46l-26.32-13.59c-75.69-39.06-54.45-96.77 6.42-232.18-34.76 27.62-79.44 71.53-113.53 134.13-50.46 92.64 33.93 157.71 58.5 174.1zm-28.8 201.66h540.18c-1.01-352.53-539.19-360.58-540.18 0zm540.2 39.32H153.21v68.15h540.22v-68.15z"
        fillRule="nonzero"
      />
    </svg>
  );
}

export function Code(props) {
  return (
    <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M9.964 2.686a.5.5 0 10-.928-.372l-4 10a.5.5 0 10.928.372l4-10zm-6.11 2.46a.5.5 0 010 .708L2.207 7.5l1.647 1.646a.5.5 0 11-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 01.708 0zm7.292 0a.5.5 0 01.708 0l2 2a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L12.793 7.5l-1.647-1.646a.5.5 0 010-.708z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function InputIcon(props) {
  return (
    <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M6.5 1a.5.5 0 000 1c.627 0 .957.2 1.156.478C7.878 2.79 8 3.288 8 4v7c0 .712-.122 1.21-.344 1.522-.199.278-.53.478-1.156.478a.5.5 0 000 1c.873 0 1.543-.3 1.97-.897l.03-.044.03.044c.427.597 1.097.897 1.97.897a.5.5 0 000-1c-.627 0-.957-.2-1.156-.478C9.122 12.21 9 11.712 9 11V4c0-.712.122-1.21.344-1.522C9.543 2.2 9.874 2 10.5 2a.5.5 0 000-1c-.873 0-1.543.3-1.97.897l-.03.044-.03-.044C8.042 1.3 7.372 1 6.5 1zM14 5h-3V4h3a1 1 0 011 1v5a1 1 0 01-1 1h-3v-1h3V5zM6 4v1H1v5h5v1H1a1 1 0 01-1-1V5a1 1 0 011-1h5z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ExplorerIcon(props) {
  return (
    <svg data-name="Layer 1" viewBox="0 0 100 100" x="0px" y="0px" {...props}>
      <g data-name="Group">
        <path
          fill="currentColor"
          data-name="Compound Path"
          d="M83.9 4.9A3 3 0 0080.1 3L63.7 8.7a3 3 0 00-1.9 3.8l.7 1.9-46.3 16a3 3 0 00-1.9 3.8l.3.9-6.5 2.4a3 3 0 00-1.9 3.8l4 11.6a3 3 0 002.8 2l1-.2 6.6-2.3.3.9a3 3 0 002.8 2l1-.2L48.5 47v19.6L30.9 93.9l5 3.2 12.6-19.4V97h6V77.7L67 97.1l5-3.2-17.5-27.3V44.9l16.6-5.7.7 1.9a3 3 0 002.8 2l1-.2L92 37.2a3 3 0 001.9-3.8zm-7.5 31.4l-7.9-22.9 10.7-3.7 7.9 22.9z"
        />
      </g>
    </svg>
  );
}

export function Loading(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <circle
        className={bw`opacity-25`}
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        className={bw`opacity-75`}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

export function ErrorIcon(props) {
  return (
    <svg
      viewBox="0 0 1.094 1.094"
      x="0px"
      y="0px"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      {...props}
    >
      <path d="M.934.934A.546.546 0 00.547 0 .546.546 0 00.16.934a.546.546 0 00.774 0zM.621.758A.074.074 0 00.547.684a.075.075 0 00-.075.074c0 .041.034.075.075.075A.075.075 0 00.621.758zM.547.609C.52.609.5.587.497.559L.472.336C.468.297.509.261.547.261s.079.036.074.075L.597.559c-.003.028-.023.05-.05.05z" />
    </svg>
  );
}

export function Response(props) {
  return (
    <svg width={15} height={15} viewBox="0 0 15 15" fill="none" {...props}>
      <path
        d="M7.947.165a1 1 0 00-.894 0l-6.5 3.25A1 1 0 000 4.309V12a1 1 0 001 1h13a1 1 0 001-1V4.309a1 1 0 00-.553-.894l-6.5-3.25zm5.622 3.928L7.5 1.06 1.431 4.093 7.5 7.291l6.069-3.198zM1 4.883V12h13V4.884L7.71 8.198a.45.45 0 01-.42 0L1 4.884z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
