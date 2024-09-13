type CSSUnits = 'px'|'rem'|'ch'|'vw'|'vh'|'dvh'|'svh'|'%';
type SizeProp = number|`${number}`|`${number}${CSSUnits}`;

/** HTML element props */
type HTMLProps<El extends HTMLElement = HTMLElement> = React.HTMLProps<El>;
/** HTML element attributes */
type HTMLAttr<El extends HTMLElement = HTMLElement> = React.HTMLAttributes<El>;

/** SVG element props */
type SVGProps = React.SVGProps<SVGElement> & { size?: SizeProp };
/** SVG element attributes */
type SVGAttr = React.SVGAttributes<SVGElement> & { size?: SizeProp };
