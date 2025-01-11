import { css } from '@emotion/react'

export const baseStyle = css`
  :root {
    /**** TYPE ****/
    --av-font-step--2: clamp(0.6076rem, 0.5702rem + 0.1873vw, 0.72rem); /* 9.7222px → 11.52px */
    --av-font-step--1: clamp(0.7292rem, 0.6722rem + 0.2847vw, 0.9rem); /* 11.6667px → 14.4px */
    --av-font-step-0: clamp(0.875rem, 0.7917rem + 0.4167vw, 1.125rem); /* 14px → 18px */
    --av-font-step-1: clamp(1.05rem, 0.9313rem + 0.5938vw, 1.4063rem); /* 16.8px → 22.5px */
    --av-font-step-2: clamp(1.26rem, 1.0941rem + 0.8297vw, 1.7578rem); /* 20.16px → 28.125px */
    --av-font-step-3: clamp(1.512rem, 1.2836rem + 1.1421vw, 2.1973rem); /* 24.192px → 35.1563px */
    --av-font-step-4: clamp(1.8144rem, 1.5037rem + 1.5536vw, 2.7466rem); /* 29.0304px → 43.9453px */
    --av-font-step-5: clamp(2.1773rem, 1.7586rem + 2.0932vw, 3.4332rem); /* 34.8365px → 54.9316px */

    /**** LAYOUT ****/
    --av-space-3xs: clamp(0.25rem, 0.2292rem + 0.1042vw, 0.3125rem); /* 4px → 5px */
    --av-space-2xs: clamp(0.4375rem, 0.3958rem + 0.2083vw, 0.5625rem); /* 7px → 9px */
    --av-space-xs: clamp(0.6875rem, 0.625rem + 0.3125vw, 0.875rem); /* 11px → 14px */
    --av-space-sm: clamp(0.875rem, 0.7917rem + 0.4167vw, 1.125rem); /* 14px → 18px */
    --av-space-md: clamp(1.3125rem, 1.1875rem + 0.625vw, 1.6875rem); /* 21px → 27px */
    --av-space-lg: clamp(1.75rem, 1.5833rem + 0.8333vw, 2.25rem); /* 28px → 36px */
    --av-space-xl: clamp(2.625rem, 2.375rem + 1.25vw, 3.375rem); /* 42px → 54px */
    --av-space-2xl: clamp(3.5rem, 3.1667rem + 1.6667vw, 4.5rem); /* 56px → 72px */
    --av-space-3xl: clamp(5.25rem, 4.75rem + 2.5vw, 6.75rem); /* 84px → 108px */

    /* One-up pairs */
    --av-space-3xs-2xs: clamp(0.25rem, 0.1458rem + 0.5208vw, 0.5625rem); /* 4px → 9px */
    --av-space-2xs-xs: clamp(0.4375rem, 0.2917rem + 0.7292vw, 0.875rem); /* 7px → 14px */
    --av-space-xs-s: clamp(0.6875rem, 0.5417rem + 0.7292vw, 1.125rem); /* 11px → 18px */
    --av-space-s-m: clamp(0.875rem, 0.6042rem + 1.3542vw, 1.6875rem); /* 14px → 27px */
    --av-space-m-l: clamp(1.3125rem, 1rem + 1.5625vw, 2.25rem); /* 21px → 36px */
    --av-space-l-xl: clamp(1.75rem, 1.2083rem + 2.7083vw, 3.375rem); /* 28px → 54px */
    --av-space-xl-2xl: clamp(2.625rem, 2rem + 3.125vw, 4.5rem); /* 42px → 72px */
    --av-space-2xl-3xl: clamp(3.5rem, 2.4167rem + 5.4167vw, 6.75rem); /* 56px → 108px */

    /* Custom pairs */
    --av-space-s-l: clamp(0.875rem, 0.4167rem + 2.2917vw, 2.25rem); /* 14px → 36px */
    --av-space-2xs-xl: clamp(0.4375rem, 0.2917rem + 2vw, 3.75rem); /* 56px → 108px */

    /* BORDER */
    --av-border-radius-xxs: 1px;
    --av-border-radius-xs: 2px;
    --av-border-radius-sm: 4px;
    --av-border-radius-md: 6px;
    --av-border-radius-lg: 8px;
    --av-border-radius-xl: 16px;
    --av-border-radius-xxl: 24px;

    /**** Z-INDEX ****/
    /* Use within layout stacking */
    --av-zindex-layout-alert: 1000; /* use for alerts, toasts, & messaging */
    --av-zindex-layout-float: 900; /* use for menus, tooltips and other floating things */
    --av-zindex-layout-modal: 800; /* use for portals/modals */
    --av-zindex-layout-popover: 700; /* use for popovers */
    --av-zindex-layout-nav: 600; /* use for layout nav, fixed or sticky page things */

    /* Use within for relative component stacking */
    --av-zindex-lg: 300;
    --av-zindex-md: 200;
    --av-zindex-sm: 100;
  }
`
