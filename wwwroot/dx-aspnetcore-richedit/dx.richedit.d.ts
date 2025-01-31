/**
* DevExpress WebRichEdit (dx.richedit.d.ts)
* Version: 24.1.4
* Copyright (c) 2012 - 2024 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs
*/
declare module DevExpress.RichEdit {
	export interface IInitDocumentProcessorOptions {
		cloneCurrentModel?: boolean;
	}
	export enum ViewType {
		Simple = 0,
		PrintLayout = 1
	}
	export enum MergeMode {
		NewParagraph = 0,
		NewSection = 1
	}
	export abstract class Collection<T> {
		get count(): number;
		getByIndex(index: number): T | null;
	}
	export class Font {
		get name(): string;
		get cssName(): string;
		delete(): void;
	}
	export class FontCollection extends Collection<Font> {
		getByName(name: string): Font | null;
		create(name: string, cssName?: string): Font | null;
		getAllFontNames(): string[];
	}
	export interface IInterval {
		start: number;
		length: number;
	}
	export class Interval implements IInterval {
		start: number;
		length: number;
		get end(): number;
		constructor(start: number, length: number);
	}
	export enum ParagraphAlignment {
		Left = 0,
		Right = 1,
		Center = 2,
		Justify = 3
	}
	export enum ParagraphLineSpacingType {
		Single = 0,
		Sesquialteral = 1,
		Double = 2,
		Multiple = 3,
		Exactly = 4,
		AtLeast = 5
	}
	export enum ParagraphFirstLineIndent {
		None = 0,
		Indented = 1,
		Hanging = 2
	}
	export interface IParagraphProperties {
		alignment?: ParagraphAlignment;
		outlineLevel?: number;
		rightIndent?: number;
		spacingBefore?: number;
		spacingAfter?: number;
		lineSpacingType?: ParagraphLineSpacingType;
		firstLineIndentType?: ParagraphFirstLineIndent;
		firstLineIndent?: number;
		contextualSpacing?: boolean;
		keepLinesTogether?: boolean;
		pageBreakBefore?: boolean;
		leftIndent?: number;
		lineSpacing?: number;
		backColor?: string;
	}
	export enum ListType {
		MultiLevel = 0,
		Number = 1,
		Bullet = 2
	}
	export enum ListLevelFormat {
		Decimal = 0,
		Hiragana = 1,
		FullWidthHiragana = 2,
		ArabicAbjad = 3,
		ArabicAlpha = 4,
		Bullet = 5,
		CardinalText = 6,
		Chicago = 7,
		ChineseCounting = 8,
		ChineseCountingThousand = 9,
		ChineseLegalSimplified = 10,
		Chosung = 11,
		DecimalEnclosedCircle = 12,
		DecimalEnclosedCircleChinese = 13,
		DecimalEnclosedFullstop = 14,
		DecimalEnclosedParentheses = 15,
		DecimalFullWidth = 16,
		DecimalFullWidth2 = 17,
		DecimalHalfWidth = 18,
		DecimalZero = 19,
		Ganada = 20,
		Hebrew1 = 21,
		Hebrew2 = 22,
		Hex = 23,
		HindiConsonants = 24,
		HindiDescriptive = 25,
		HindiNumbers = 26,
		HindiVowels = 27,
		IdeographDigital = 28,
		IdeographEnclosedCircle = 29,
		IdeographLegalTraditional = 30,
		IdeographTraditional = 31,
		IdeographZodiac = 32,
		IdeographZodiacTraditional = 33,
		Iroha = 34,
		IrohaFullWidth = 35,
		JapaneseCounting = 36,
		JapaneseDigitalTenThousand = 37,
		JapaneseLegal = 38,
		KoreanCounting = 39,
		KoreanDigital = 40,
		KoreanDigital2 = 41,
		KoreanLegal = 42,
		LowerLetter = 43,
		LowerRoman = 44,
		None = 45,
		NumberInDash = 46,
		Ordinal = 47,
		OrdinalText = 48,
		RussianLower = 49,
		RussianUpper = 50,
		TaiwaneseCounting = 51,
		TaiwaneseCountingThousand = 52,
		TaiwaneseDigital = 53,
		ThaiDescriptive = 54,
		ThaiLetters = 55,
		ThaiNumbers = 56,
		UpperLetter = 57,
		UpperRoman = 58,
		VietnameseDescriptive = 59
	}
	export enum ListLevelNumberAlignment {
		Left = 0,
		Center = 1,
		Right = 2
	}
	export class ListLevelSettings {
		displayFormatString: string;
		format: ListLevelFormat;
		start: number;
		alignment: ListLevelNumberAlignment;
		separator: string;
		leftIndent: number;
		firstLineIndent: number;
		firstLineIndentType: ParagraphFirstLineIndent;
		fontName: string;
		fontColor: string;
		fontSize: number;
		fontBold: boolean;
		fontItalic: boolean;
	}
	export class List {
		get index(): number;
		get type(): ListType;
		get levelProperties(): ListLevelSettings[];
		set levelProperties(settings: ListLevelSettings[]);
	}
	export class Paragraph {
		get index(): number;
		get interval(): Interval;
		get properties(): IParagraphProperties;
		set properties(properties: IParagraphProperties);
		get list(): List | null;
		get listLevel(): number;
		addToList(list: List, targetListLevel?: number): void;
	}
	export class ParagraphCollection extends Collection<Paragraph> {
		create(position: number): Paragraph;
		find(position: number | IInterval): Paragraph[];
	}
	export class Bookmark {
		get index(): number;
		get subDocument(): SubDocument;
		get interval(): Interval;
		get name(): string;
		delete(): void;
	}
	export class BookmarkCollection<TBookmark extends Bookmark> extends Collection<TBookmark> {
		find(position: number | IInterval | IInterval[] | string | RegExp): TBookmark[];
		create(interval: IInterval, name: string): Bookmark;
	}
	export class RangePermission {
		get index(): number;
		get subDocument(): SubDocument;
		get interval(): Interval;
		get userName(): string;
		get group(): string;
		delete(): void;
	}
	export interface IRangePermissionSearchOptions {
		position?: number | IInterval | IInterval[];
		userName?: string | RegExp;
		group?: string | RegExp;
	}
	export class RangePermissionCollection extends Collection<RangePermission> {
		protectRange(intervals: IInterval[], userName?: string, group?: string): RangePermission[];
		find(options: IRangePermissionSearchOptions): RangePermission[];
		isAllowEdit(position: number | IInterval | IInterval[]): boolean;
		create(interval: IInterval, userName?: string, group?: string): RangePermission;
	}
	export class TableCell extends TableElementBase {
		get index(): number;
		get interval(): Interval;
		get parentRow(): TableRow;
		get width(): TableWidth;
		set width(value: TableWidth);
		get backgroundColor(): string;
		set backgroundColor(value: string);
		get contentHorizontalAlignment(): TableContentHorizontalAlignment | null;
		set contentHorizontalAlignment(value: TableContentHorizontalAlignment);
		get contentVerticalAlignment(): TableContentVerticalAlignment;
		set contentVerticalAlignment(value: TableContentVerticalAlignment);
		get characterProperties(): CharacterProperties;
		set characterProperties(value: ICharacterProperties);
		get borders(): TableCellBorders;
		set borders(value: ITableCellBorders);
		get margins(): Margins;
		set margins(value: IMargins);
		split(columnCount: number, rowCount: number): void;
	}
	export class TableCellCollection extends TableBaseCollection<TableCell> {
		insert(index: number, toRight?: boolean): TableCell;
		remove(index: number): void;
	}
	export class TableRow extends TableElementBase {
		get index(): number;
		get interval(): Interval;
		get cells(): TableCellCollection;
		get parentTable(): Table;
		get height(): TableRowHeight;
		set height(value: TableRowHeight);
	}
	export class TableRowCollection extends TableBaseCollection<TableRow> {
		insert(index: number, below?: boolean): TableRow;
		remove(index: number): void;
	}
	export class Table extends TableElementBase {
		get index(): number;
		get interval(): Interval;
		delete(): void;
		get rows(): TableRowCollection;
		get parentCell(): TableCell | null;
		get autoFit(): boolean;
		set autoFit(value: boolean);
		get width(): TableWidth;
		set width(value: TableWidth);
		get styleName(): string;
		set styleName(value: string);
		get tableStyleOptions(): TableStyleOptions;
		set tableStyleOptions(value: TableStyleOptions);
		get backgroundColor(): string;
		set backgroundColor(value: string);
		get contentHorizontalAlignment(): TableContentHorizontalAlignment | null;
		set contentHorizontalAlignment(value: TableContentHorizontalAlignment);
		get contentVerticalAlignment(): TableContentVerticalAlignment | null;
		set contentVerticalAlignment(value: TableContentVerticalAlignment);
		get borders(): TableBorders;
		set borders(value: ITableBorders);
		get cellMargins(): Margins;
		set cellMargins(value: IMargins);
		mergeCells(startPosition: TableCellPosition, endPosition: TableCellPosition): void;
	}
	export class TableCollection extends TableBaseCollection<Table> {
		create(position: number, columnCount: number, rowCount: number): Table;
		find(position: number | IInterval): Table[];
	}
	export enum FieldName {
		Unknown = 0,
		Time = 1,
		Date = 2,
		Page = 3,
		NumPages = 4,
		MergeField = 5,
		DocVariable = 6,
		Hyperlink = 7,
		Seq = 8,
		Tc = 9,
		PageRef = 10,
		Toc = 11,
		FillIn = 12
	}
	export class Field {
		get index(): number;
		get interval(): Interval;
		get codeInterval(): Interval;
		get subDocument(): SubDocument;
		get resultInterval(): Interval;
		get isShowCode(): boolean;
		set isShowCode(val: boolean);
		get isHyperlink(): boolean;
		get name(): FieldName;
		delete(): void;
		update(callback?: (self: Field) => void): boolean;
	}
	export class UpdateFieldsOptions {
		doInAllSubDocuments: boolean;
		updateTocFields: boolean;
		constructor(doInAllSubDocuments?: boolean, updateTocFields?: boolean);
	}
	export class FieldCollection extends Collection<Field> {
		create(position: number | Interval, code?: string): Field;
		createMergeField(position: number, name: string): Field;
		find(position: number | IInterval): Field[];
		showAllFieldResults(doInAllSubDocuments?: boolean): void;
		showAllFieldCodes(doInAllSubDocuments?: boolean): void;
		updateAllFields(callback?: () => void, options?: UpdateFieldsOptions): boolean;
	}
	export class HyperlinkInfo {
		constructor(text: string, url?: string, bookmark?: string, tooltip?: string);
		text: string;
		tooltip: string;
		url: string;
		bookmark: string;
	}
	export class Hyperlink extends Field {
		get hyperlinkInfo(): HyperlinkInfo;
		set hyperlinkInfo(hyperlinkInfo: HyperlinkInfo);
	}
	export class HyperlinkCollection extends Collection<Hyperlink> {
		create(position: number | IInterval, hyperlinkInfo: HyperlinkInfo): Hyperlink;
		find(position: number | IInterval): Hyperlink[];
	}
	export class Size {
		width: number;
		height: number;
	}
	export enum WrapType {
		Inline = 0,
		TopAndBottom = 1,
		Tight = 2,
		Through = 3,
		Square = 4,
		BehindText = 5,
		InFrontOfText = 6
	}
	export enum WrapSide {
		Both = 0,
		Left = 1,
		Right = 2,
		Largest = 3
	}
	export interface IFloatingObjectDistance {
		left?: number;
		right?: number;
		top?: number;
		bottom?: number;
	}
	export enum FloatingObjectHorizontalPositionType {
		Aligned = 0,
		Absolute = 1,
		Relative = 2
	}
	export enum FloatingObjectHorizontalAnchorElement {
		Page = 0,
		Character = 1,
		Column = 2,
		Margin = 3,
		LeftMargin = 4,
		RightMargin = 5,
		InsideMargin = 6,
		OutsideMargin = 7
	}
	export enum FloatingObjectHorizontalAlignment {
		None = 0,
		Left = 1,
		Center = 2,
		Right = 3,
		Inside = 4,
		Outside = 5
	}
	export class HorizontalAlignedPosition {
		readonly type = FloatingObjectHorizontalPositionType.Aligned;
		relativeTo: FloatingObjectHorizontalAnchorElement;
		alignment: FloatingObjectHorizontalAlignment;
	}
	export class HorizontalAbsolutePosition {
		readonly type = FloatingObjectHorizontalPositionType.Absolute;
		relativeTo: FloatingObjectHorizontalAnchorElement;
		position: number;
	}
	export class HorizontalRelativePosition {
		readonly type = FloatingObjectHorizontalPositionType.Relative;
		relativeTo: FloatingObjectHorizontalAnchorElement.Margin | FloatingObjectHorizontalAnchorElement.Page | FloatingObjectHorizontalAnchorElement.LeftMargin | FloatingObjectHorizontalAnchorElement.RightMargin | FloatingObjectHorizontalAnchorElement.InsideMargin | FloatingObjectHorizontalAnchorElement.OutsideMargin;
		relativePosition: number;
	}
	export interface IHorizontalAlignedPosition {
		relativeTo: FloatingObjectHorizontalAnchorElement;
		alignment: FloatingObjectHorizontalAlignment;
	}
	export interface IHorizontalAbsolutePosition {
		relativeTo: FloatingObjectHorizontalAnchorElement;
		position: number;
	}
	export interface IHorizontalRelativePosition {
		relativeTo: FloatingObjectHorizontalAnchorElement.Margin | FloatingObjectHorizontalAnchorElement.Page | FloatingObjectHorizontalAnchorElement.LeftMargin | FloatingObjectHorizontalAnchorElement.RightMargin | FloatingObjectHorizontalAnchorElement.InsideMargin | FloatingObjectHorizontalAnchorElement.OutsideMargin;
		relativePosition: number;
	}
	export enum FloatingObjectVerticalPositionType {
		Aligned = 0,
		Absolute = 1,
		Relative = 2
	}
	export enum FloatingObjectVerticalAnchorElement {
		Page = 0,
		Line = 1,
		Paragraph = 2,
		Margin = 3,
		TopMargin = 4,
		BottomMargin = 5,
		InsideMargin = 6,
		OutsideMargin = 7
	}
	export enum FloatingObjectVerticalAlignment {
		Top = 1,
		Center = 2,
		Bottom = 3,
		Inside = 4,
		Outside = 5
	}
	export class VerticalAlignedPosition {
		readonly type = FloatingObjectVerticalPositionType.Aligned;
		relativeTo: FloatingObjectVerticalAnchorElement.Page | FloatingObjectVerticalAnchorElement.Line | FloatingObjectVerticalAnchorElement.Margin | FloatingObjectVerticalAnchorElement.TopMargin | FloatingObjectVerticalAnchorElement.BottomMargin | FloatingObjectVerticalAnchorElement.InsideMargin | FloatingObjectVerticalAnchorElement.OutsideMargin;
		alignment: FloatingObjectVerticalAlignment;
	}
	export class VerticalAbsolutePosition {
		readonly type = FloatingObjectVerticalPositionType.Absolute;
		relativeTo: FloatingObjectVerticalAnchorElement;
		position: number;
	}
	export class VerticalRelativePosition {
		readonly type = FloatingObjectVerticalPositionType.Relative;
		relativeTo: FloatingObjectVerticalAnchorElement.Page | FloatingObjectVerticalAnchorElement.Margin | FloatingObjectVerticalAnchorElement.TopMargin | FloatingObjectVerticalAnchorElement.BottomMargin | FloatingObjectVerticalAnchorElement.InsideMargin | FloatingObjectVerticalAnchorElement.OutsideMargin;
		relativePosition: number;
	}
	export interface IVerticalAlignedPosition {
		relativeTo: FloatingObjectVerticalAnchorElement.Page | FloatingObjectVerticalAnchorElement.Line | FloatingObjectVerticalAnchorElement.Margin | FloatingObjectVerticalAnchorElement.TopMargin | FloatingObjectVerticalAnchorElement.BottomMargin | FloatingObjectVerticalAnchorElement.InsideMargin | FloatingObjectVerticalAnchorElement.OutsideMargin;
		alignment: FloatingObjectVerticalAlignment;
	}
	export interface IVerticalAbsolutePosition {
		relativeTo: FloatingObjectVerticalAnchorElement;
		position: number;
	}
	export interface IVerticalRelativePosition {
		relativeTo: FloatingObjectVerticalAnchorElement.Page | FloatingObjectVerticalAnchorElement.Margin | FloatingObjectVerticalAnchorElement.TopMargin | FloatingObjectVerticalAnchorElement.BottomMargin | FloatingObjectVerticalAnchorElement.InsideMargin | FloatingObjectVerticalAnchorElement.OutsideMargin;
		relativePosition: number;
	}
	export class FloatingImage extends Image {
		get outlineColor(): string;
		set outlineColor(value: string);
		get outlineWidth(): number;
		set outlineWidth(value: number);
		get wrapSide(): WrapSide;
		set wrapSide(wrapSide: WrapSide);
		get distance(): IFloatingObjectDistance;
		set distance(value: IFloatingObjectDistance);
		getHorizontalPosition(): HorizontalAlignedPosition | HorizontalAbsolutePosition | HorizontalRelativePosition;
		setHorizontalPosition(position: IHorizontalAlignedPosition | IHorizontalAbsolutePosition | IHorizontalRelativePosition): void;
		getVerticalPosition(): VerticalAlignedPosition | VerticalAbsolutePosition | VerticalRelativePosition;
		setVerticalPosition(position: IVerticalAlignedPosition | IVerticalAbsolutePosition | IVerticalRelativePosition): void;
		getWrapType(): WrapType;
	}
	export abstract class Image {
		get base64(): string;
		get url(): string | undefined;
		get interval(): Interval;
		get isLoaded(): boolean;
		get extension(): string;
		get originalSize(): Size;
		get actualSize(): Size;
		set actualSize(value: Size);
		get description(): string;
		set description(value: string);
		abstract getWrapType(): WrapType;
		changeWrapType(wrapType: WrapType): InlineImage | FloatingImage;
		delete(): void;
		onLoaded(callback: (image: Image) => void): void;
		reload(base64: string, size?: Size): void;
	}
	export class InlineImage extends Image {
		getWrapType(): WrapType;
	}
	export interface IInsertedInlineImageOptions {
		base64?: string;
		url?: string;
		actualSize: Size;
		callback?: (image: InlineImage) => void;
		description?: string;
	}
	export interface IInsertedFloatingImageOptions {
		base64?: string;
		url?: string;
		actualSize: Size;
		callback?: (image: FloatingImage) => void;
		description?: string;
		outlineColor?: string;
		outlineWidth?: number;
		wrapSide?: WrapSide;
		wrapType?: WrapType;
		distance?: IFloatingObjectDistance;
		horizontalPosition?: IHorizontalAlignedPosition | IHorizontalAbsolutePosition | IHorizontalRelativePosition;
		verticalPosition?: IVerticalAlignedPosition | IVerticalAbsolutePosition | IVerticalRelativePosition;
	}
	export class ImageIterator {
		get image(): InlineImage | FloatingImage | null;
		next(): boolean;
	}
	export class Images {
		createInline(position: number, options: IInsertedInlineImageOptions): InlineImage;
		createFloating(position: number, options: IInsertedFloatingImageOptions): FloatingImage;
		getIterator(startPosition?: number): ImageIterator;
		getAllImages(): (InlineImage | FloatingImage)[];
		find(position: number | Interval | Interval[]): (InlineImage | FloatingImage)[];
	}
	export enum SubDocumentType {
		Main = 0,
		Header = 1,
		Footer = 2,
		TextBox = 3,
		FootNote = 4,
		EndNote = 5
	}
	export enum SectionBreakType {
		NextPage = 0,
		OddPage = 1,
		EvenPage = 2,
		Continuous = 3
	}
	export class Margins {
		left: number;
		right: number;
		top: number;
		bottom: number;
	}
	export enum PaperSize {
		Custom = 0,
		Letter = 1,
		LetterSmall = 2,
		Tabloid = 3,
		Ledger = 4,
		Legal = 5,
		Statement = 6,
		Executive = 7,
		A3 = 8,
		A4 = 9,
		A4Small = 10,
		A5 = 11,
		B4 = 12,
		B5 = 13,
		Folio = 14,
		Quarto = 15,
		Standard10x14 = 16,
		Standard11x17 = 17,
		Note = 18,
		Number9Envelope = 19,
		Number10Envelope = 20,
		Number11Envelope = 21,
		Number12Envelope = 22,
		Number14Envelope = 23,
		CSheet = 24,
		DSheet = 25,
		ESheet = 26,
		DLEnvelope = 27,
		C5Envelope = 28,
		C3Envelope = 29,
		C4Envelope = 30,
		C6Envelope = 31,
		C65Envelope = 32,
		B4Envelope = 33,
		B5Envelope = 34,
		B6Envelope = 35,
		ItalyEnvelope = 36,
		MonarchEnvelope = 37,
		PersonalEnvelope = 38,
		USStandardFanfold = 39,
		GermanStandardFanfold = 40,
		GermanLegalFanfold = 41,
		IsoB4 = 42,
		JapanesePostcard = 43,
		Standard9x11 = 44,
		Standard10x11 = 45,
		Standard15x11 = 46,
		InviteEnvelope = 47,
		LetterExtra = 50,
		LegalExtra = 51,
		TabloidExtra = 52,
		A4Extra = 53,
		LetterTransverse = 54,
		A4Transverse = 55,
		LetterExtraTransverse = 56,
		APlus = 57,
		BPlus = 58,
		LetterPlus = 59,
		A4Plus = 60,
		A5Transverse = 61,
		B5Transverse = 62,
		A3Extra = 63,
		A5Extra = 64,
		B5Extra = 65,
		A2 = 66,
		A3Transverse = 67,
		A3ExtraTransverse = 68,
		JapaneseDoublePostcard = 69,
		A6 = 70,
		JapaneseEnvelopeKakuNumber2 = 71,
		JapaneseEnvelopeKakuNumber3 = 72,
		JapaneseEnvelopeChouNumber3 = 73,
		JapaneseEnvelopeChouNumber4 = 74,
		LetterRotated = 75,
		A3Rotated = 76,
		A4Rotated = 77,
		A5Rotated = 78,
		B4JisRotated = 79,
		B5JisRotated = 80,
		JapanesePostcardRotated = 81,
		JapaneseDoublePostcardRotated = 82,
		A6Rotated = 83,
		JapaneseEnvelopeKakuNumber2Rotated = 84,
		JapaneseEnvelopeKakuNumber3Rotated = 85,
		JapaneseEnvelopeChouNumber3Rotated = 86,
		JapaneseEnvelopeChouNumber4Rotated = 87,
		B6Jis = 88,
		B6JisRotated = 89,
		Standard12x11 = 90,
		JapaneseEnvelopeYouNumber4 = 91,
		JapaneseEnvelopeYouNumber4Rotated = 92,
		Prc16K = 93,
		Prc32K = 94,
		Prc32KBig = 95,
		PrcEnvelopeNumber1 = 96,
		PrcEnvelopeNumber2 = 97,
		PrcEnvelopeNumber3 = 98,
		PrcEnvelopeNumber4 = 99,
		PrcEnvelopeNumber5 = 100,
		PrcEnvelopeNumber6 = 101,
		PrcEnvelopeNumber7 = 102,
		PrcEnvelopeNumber8 = 103,
		PrcEnvelopeNumber9 = 104,
		PrcEnvelopeNumber10 = 105,
		Prc16KRotated = 106,
		Prc32KRotated = 107,
		Prc32KBigRotated = 108,
		PrcEnvelopeNumber1Rotated = 109,
		PrcEnvelopeNumber2Rotated = 110,
		PrcEnvelopeNumber3Rotated = 111,
		PrcEnvelopeNumber4Rotated = 112,
		PrcEnvelopeNumber5Rotated = 113,
		PrcEnvelopeNumber6Rotated = 114,
		PrcEnvelopeNumber7Rotated = 115,
		PrcEnvelopeNumber8Rotated = 116,
		PrcEnvelopeNumber9Rotated = 117,
		PrcEnvelopeNumber10Rotated = 118
	}
	export enum HeaderFooterType {
		First = 0,
		Odd = 1,
		Even = 2,
		Primary = 1
	}
	export class Section {
		get index(): number;
		get interval(): Interval;
		get margins(): Margins;
		set margins(margins: Margins);
		get columnCount(): number;
		set columnCount(columnCount: number);
		get pageSize(): Size;
		set pageSize(size: Size);
		get headerOffset(): number;
		set headerOffset(offset: number);
		get footerOffset(): number;
		set footerOffset(offset: number);
		get paperSize(): PaperSize;
		set paperSize(paperSize: PaperSize);
		get landscape(): boolean;
		set landscape(landscape: boolean);
		getHeader(type?: HeaderFooterType, createIfNotExist?: boolean): SubDocument | null;
		getFooter(type?: HeaderFooterType, createIfNotExist?: boolean): SubDocument | null;
	}
	export enum DocumentFormat {
		PlainText = 1,
		Rtf = 2,
		Html = 3,
		OpenXml = 4
	}
	export enum CharacterPropertiesScript {
		Normal = 0,
		Subscript = 1,
		Superscript = 2
	}
	export class CharacterProperties {
		fontName: string;
		size: number;
		foreColor: string;
		backColor: string;
		highlightColor: string;
		underline: boolean;
		underlineColor: string;
		bold: boolean;
		italic: boolean;
		strikeout: boolean;
		underlineWordsOnly: boolean;
		script: CharacterPropertiesScript;
		allCaps: boolean;
		hidden: boolean;
		smallCaps: boolean;
	}
	export interface ICharacterProperties {
		fontName?: string;
		size?: number;
		foreColor?: string;
		backColor?: string;
		highlightColor?: string;
		underline?: boolean;
		underlineColor?: string;
		bold?: boolean;
		italic?: boolean;
		strikeout?: boolean;
		underlineWordsOnly?: boolean;
		script?: CharacterPropertiesScript;
		allCaps?: boolean;
		hidden?: boolean;
		smallCaps?: boolean;
	}
	export class ParagraphProperties {
		alignment: ParagraphAlignment;
		outlineLevel: number;
		rightIndent: number;
		spacingBefore: number;
		spacingAfter: number;
		lineSpacingType: ParagraphLineSpacingType;
		firstLineIndentType: ParagraphFirstLineIndent;
		firstLineIndent: number;
		contextualSpacing: boolean;
		keepLinesTogether: boolean;
		pageBreakBefore: boolean;
		leftIndent: number;
		lineSpacing: number;
		backColor: string;
	}
	export class SubDocument {
		get paragraphs(): ParagraphCollection;
		get bookmarks(): BookmarkCollection<Bookmark>;
		get rangePermissions(): RangePermissionCollection;
		get tables(): TableCollection;
		get fields(): FieldCollection;
		get hyperlinks(): HyperlinkCollection;
		get images(): Images;
		get parentSubDocument(): SubDocument | null;
		get id(): number;
		get type(): SubDocumentType;
		get interval(): Interval;
		get length(): number;
		insertText(position: number, text: string): Interval;
		insertLineBreak(position: number): Interval;
		insertColumnBreak(position: number): Interval;
		insertPageBreak(position: number): Interval;
		insertSectionBreak(position: number, type: SectionBreakType): Section;
		insertPicture(position: number, base64: string, size?: Size, callback?: (interval: Interval) => void): void;
		insertParagraph(position: number): Paragraph;
		insertHtml(position: number, htmlText: string, callback?: (interval: Interval) => void): void;
		getHtml(interval?: IInterval): string;
		insertRtf(position: number, rtfText: string, callback?: (interval: Interval, isRtfValid: boolean) => void): void;
		getRtf(interval?: IInterval): string;
		insertContent(position: number, content: string | File | Blob | ArrayBuffer, documentFormat: DocumentFormat, callback?: (interval: Interval, success: boolean) => void): void;
		deleteText(interval: IInterval): void;
		getText(interval?: IInterval): string;
		getCharacterProperties(interval: IInterval): CharacterProperties;
		setCharacterProperties(interval: IInterval, characterProperties: ICharacterProperties): void;
		getParagraphProperties(interval: IInterval): ParagraphProperties;
		setParagraphProperties(interval: IInterval, paragraphProperties: IParagraphProperties): void;
	}
	export class SubDocumentCollection<T extends SubDocument> extends Collection<T> {
		get main(): T;
		getById(id: number): T;
		forEach(callback: (subDocument: T) => void): void;
	}
	export class SectionCollection extends Collection<Section> {
		find(position: number): Section;
		create(sectionBreakPosition: number, type: SectionBreakType): Section;
	}
	export class ListCollection extends Collection<List> {
		create(type: ListType): List;
		deleteNumeration(subDocument: SubDocument, interval: IInterval | number): void;
	}
	export class RichEditDocumentBase {
		get fonts(): FontCollection;
		get subDocuments(): SubDocumentCollection<SubDocument>;
		get sections(): SectionCollection;
		get bookmarks(): BookmarkCollection<Bookmark>;
		get rangePermissions(): RangePermissionCollection;
		get paragraphs(): ParagraphCollection;
		get tables(): TableCollection;
		get fields(): FieldCollection;
		get hyperlinks(): HyperlinkCollection;
		get lists(): ListCollection;
		get length(): number;
		get interval(): Interval;
		get isProtected(): boolean;
		protect(password: string): void;
		unprotect(): void;
		checkProtectionPassword(password: string): boolean;
		insertText(position: number, text: string): Interval;
		insertLineBreak(position: number): Interval;
		insertColumnBreak(position: number): Interval;
		insertPageBreak(position: number): Interval;
		insertSectionBreak(position: number, type: SectionBreakType): Section;
		insertPicture(position: number, base64: string, size?: Size, callback?: (interval: Interval) => void): void;
		insertParagraph(position: number): Paragraph;
		deleteText(interval: IInterval): void;
		getText(interval?: Interval): string;
		getCharacterProperties(interval: IInterval): CharacterProperties;
		setCharacterProperties(interval: IInterval, characterProperties: ICharacterProperties): void;
		getParagraphProperties(interval: IInterval): ParagraphProperties;
		setParagraphProperties(interval: IInterval, paragraphProperties: IParagraphProperties): void;
		getDefaultCharacterProperties(): CharacterProperties;
		setDefaultCharacterProperties(characterProperties: ICharacterProperties): void;
	}
	export class BookmarkBase extends Bookmark {
		goTo(): void;
	}
	export class BookmarkCollectionBase extends BookmarkCollection<BookmarkBase> {
	}
	export class SubDocumentBase extends SubDocument {
		get bookmarks(): BookmarkCollectionBase;
	}
	export class SubDocumentCollectionBase extends SubDocumentCollection<SubDocumentBase> {
		get main(): SubDocumentBase;
	}
	export class RichEditDocument extends RichEditDocumentBase {
		get modified(): boolean;
		set modified(value: boolean);
		get subDocuments(): SubDocumentCollectionBase;
		get bookmarks(): BookmarkCollectionBase;
		get images(): Images;
		setDefaultCharacterProperties(characterProperties: ICharacterProperties): void;
	}
	export class RichEditLayout {
		get showHiddenSymbols(): boolean;
		set showHiddenSymbols(value: boolean);
		get showTableGridLines(): boolean;
		set showTableGridLines(value: boolean);
	}
	export class RichEditSelection {
		get activeSubDocument(): SubDocumentBase;
		get anchor(): number;
		get active(): number;
		get start(): number;
		get end(): number;
		get intervals(): Interval[];
		get showCursorAtEndOfLine(): boolean;
		set showCursorAtEndOfLine(value: boolean);
		setSelection(position: number | IInterval | IInterval[]): void;
		selectAll(): void;
		goToSubDocumentEnd(extendSelection?: boolean): void;
		goToNextLine(extendSelection?: boolean): void;
		goToLineEnd(extendSelection?: boolean): void;
		goToLineStart(extendSelection?: boolean): void;
		goToPreviousLine(extendSelection?: boolean): void;
		goToNextCharacter(extendSelection?: boolean): void;
		goToPreviousCharacter(extendSelection?: boolean): void;
		selectLine(extendSelection?: boolean): void;
		goToNextPage(extendSelection?: boolean): void;
		goToPreviousPage(extendSelection?: boolean): void;
		goToDocumentStart(extendSelection?: boolean): void;
		goToDocumentEnd(extendSelection?: boolean): void;
		goToNextWord(extendSelection?: boolean): void;
		goToPreviousWord(extendSelection?: boolean): void;
		goToParagraphStart(extendSelection?: boolean): void;
		goToParagraphEnd(extendSelection?: boolean): void;
		selectParagraph(): void;
		goToNextPageStart(extendSelection?: boolean): void;
		goToPreviousPageStart(extendSelection?: boolean): void;
		selectTableCell(): void;
		selectTableRow(): void;
		selectTable(): void;
	}
	export class History {
		beginTransaction(): void;
		endTransaction(): void;
		redo(): void;
		undo(): void;
		clear(): void;
	}
	export class UnitConverter {
		pixelsToTwips(value: number): number;
		inchesToTwips(value: number): number;
		pointsToTwips(value: number): number;
		centimetersToTwips(value: number): number;
		twipsToCentimeters(value: number): number;
		pixelsToCentimeters(value: number): number;
		twipsToInches(value: number): number;
		pixelsToInches(value: number): number;
		pixelsToPoints(value: number): number;
		twipsToPoints(value: number): number;
		twipsToPixels(value: number): number;
	}
	export class MailMergeOptions {
		getDataSource(): any;
		setDataSource(dataSource: any, callback?: (success: boolean) => void): void;
		get activeRecordIndex(): number;
		set activeRecordIndex(value: number);
		get viewMergedData(): boolean;
		set viewMergedData(value: boolean);
	}
	export class AuthenticationOptions {
		get userName(): string;
		set userName(value: string);
		get group(): string;
		set group(value: string);
	}
	export interface IPaddings {
		left: number;
		right: number;
		top: number;
		bottom: number;
	}
	export class SimpleViewSettings {
		get paddings(): IPaddings;
		get fixedWidth(): number | undefined;
		set paddings(paddings: IPaddings);
		set fixedWidth(width: number | undefined);
	}
	export enum FileTabCommandId {
		CreateDocument = 412,
		OpenDocument = 410,
		ExportDocument = 413,
		DownloadDocumentMenu = 414,
		DownloadDocx = 418,
		DownloadRtf = 419,
		DownloadTxt = 420,
		DownloadHtml = 421,
		PrintDocument = 416
	}
	export enum HomeTabCommandId {
		ChangeCaseMenu = 431,
		AlignParagraphMenu = 432,
		LineSpacingMenu = 433,
		Undo = 6,
		Redo = 7,
		Cut = 10,
		Copy = 9,
		Paste = 8,
		ChangeFontName = 11,
		ChangeFontSize = 13,
		IncreaseFontSize = 14,
		DecreaseFontSize = 15,
		ChangeFontForeColor = 28,
		ShowFontDialog = 52,
		ToggleFontBold = 20,
		ToggleFontItalic = 21,
		ToggleFontUnderline = 22,
		ToggleFontStrikeout = 24,
		ToggleFontSubscript = 27,
		ToggleFontSuperscript = 26,
		CapitalizationSentenceCase = 207,
		CapitalizationUpperCase = 16,
		CapitalizationLowerCase = 17,
		CapitalizeEachWordCase = 18,
		CapitalizationToggleCase = 19,
		ClearFormatting = 30,
		ToggleBulletedList = 31,
		ToggleNumberedList = 32,
		ToggleMultilevelList = 33,
		ToggleParagraphAlignmentLeft = 37,
		ToggleParagraphAlignmentCenter = 38,
		ToggleParagraphAlignmentRight = 39,
		ToggleParagraphAlignmentJustify = 40,
		ToggleShowHiddenSymbols = 36,
		SetSingleParagraphSpacing = 41,
		SetSesquialteralParagraphSpacing = 42,
		SetDoubleParagraphSpacing = 43,
		AddSpacingBeforeParagraph = 45,
		AddSpacingAfterParagraph = 46,
		RemoveSpacingBeforeParagraph = 47,
		RemoveSpacingAfterParagraph = 48,
		ChangeShading = 49,
		ChangeStyle = 12,
		Find = 50,
		Replace = 51,
		ChangeFontHighlightColor = 29,
		ToggleFontDoubleUnderline = 23
	}
	export enum InsertTabCommandId {
		ShowInsertTableDialog = 55,
		InsertPicture = 411,
		ShowBookmarkDialog = 58,
		ShowHyperlinkDialog = 59,
		InsertHeader = 220,
		InsertFooter = 221,
		InsertPageNumberField = 235,
		InsertPageCountField = 236,
		InsertFloatingTextBox = 368
	}
	export enum PageLayoutTabCommandId {
		MarginsMenu = 434,
		OrientationMenu = 435,
		SizeMenu = 436,
		ColumnsMenu = 437,
		BreaksMenu = 438,
		SetSectionNormalPageMargins = 66,
		SetSectionNarrowPageMargins = 67,
		SetSectionModeratePageMargins = 68,
		SetSectionWidePageMargins = 69,
		ShowMarginsPageSetupDialog = 70,
		SetPortraitPageOrientation = 71,
		SetLandscapePageOrientation = 72,
		SetSectionLetterPaperSize = 162,
		SetSectionLegalPaperSize = 99,
		SetSectionFolioPaperSize = 100,
		SetSectionA4PaperSize = 101,
		SetSectionB5PaperSize = 104,
		SetSectionExecutivePaperSize = 105,
		SetSectionA5PaperSize = 102,
		SetSectionA6PaperSize = 103,
		ShowPageSetupDialog = 73,
		SetSectionOneColumn = 74,
		SetSectionTwoColumns = 75,
		SetSectionThreeColumns = 76,
		InsertPageBreak = 54,
		InsertColumnBreak = 79,
		InsertSectionBreakNextPage = 80,
		InsertSectionBreakEvenPage = 81,
		InsertSectionBreakOddPage = 82,
		ChangePageColor = 90
	}
	export enum ReferencesTabCommandId {
		AddTextMenu = 439,
		InsertCaptionMenu = 440,
		InsertTableOfFiguresMenu = 441,
		InsertTableOfContents = 377,
		SetParagraphBodyTextLevel = 385,
		SetParagraphHeading1Level = 386,
		SetParagraphHeading2Level = 387,
		SetParagraphHeading3Level = 388,
		SetParagraphHeading4Level = 389,
		SetParagraphHeading5Level = 390,
		SetParagraphHeading6Level = 391,
		SetParagraphHeading7Level = 392,
		SetParagraphHeading8Level = 393,
		SetParagraphHeading9Level = 394,
		CreateFigureCaptionField = 382,
		CreateTableCaptionField = 383,
		CreateEquationCaptionField = 381,
		CreateTableOfFiguresField = 379,
		CreateTableOfTablesField = 380,
		CreateTableOfEquationsField = 378,
		UpdateTableOfContents = 384
	}
	export enum MailMergeTabCommandId {
		CreateFieldMenu = 442,
		CreateField = 178,
		CreateDateField = 203,
		CreateTimeField = 204,
		CreatePageField = 205,
		CreateNumPagesField = 236,
		CreateEmptyMergeField = 372,
		CreateEmptyDocVariableField = 373,
		ShowInsertMergeFieldDialog = 214,
		ToggleViewMergedData = 213,
		ShowAllFieldCodes = 186,
		ShowAllFieldResults = 187,
		UpdateAllFields = 200,
		GoToFirstDataRecord = 209,
		GoToPreviousDataRecord = 210,
		GoToNextDataRecord = 211,
		GoToLastDataRecord = 212,
		ShowMailMergeDialog = 216
	}
	export enum ViewTabCommandId {
		SwitchToSimpleView = 405,
		SwitchToPrintLayout = 406,
		ToggleShowHorizontalRuler = 94,
		ToggleFullScreen = 98
	}
	export enum HeaderAndFooterTabCommandId {
		GoToPageHeader = 227,
		GoToPageFooter = 228,
		GoToPreviousPageHeaderFooter = 230,
		GoToNextPageHeaderFooter = 229,
		LinkHeaderFooterToPrevious = 222,
		ToggleDifferentFirstPage = 231,
		ToggleDifferentOddAndEvenPages = 232,
		ChangeHeaderOffset = 330,
		ChangeFooterOffset = 331,
		CloseHeaderFooter = 233
	}
	export enum TableDesignTabCommandId {
		TableStyleOptionsMenu = 443,
		BordersMenu = 444,
		ToggleFirstRow = 280,
		ToggleLastRow = 281,
		ToggleBandedRows = 284,
		ToggleFirstColumn = 282,
		ToggleLastColumn = 283,
		ToggleBandedColumn = 285,
		ChangeTableStyle = 269,
		ChangeTableRepositoryItemBorderStyle = 292,
		ChangeTableRepositoryItemBorderWidth = 291,
		ChangeTableRepositoryItemBorderColor = 290,
		ToggleTableCellsBottomBorder = 272,
		ToggleTableCellsTopBorder = 270,
		ToggleTableCellsLeftBorder = 273,
		ToggleTableCellsRightBorder = 271,
		ToggleTableCellNoBorder = 274,
		ToggleTableCellAllBorders = 275,
		ToggleTableCellOutsideBorders = 279,
		ToggleTableCellInsideBorders = 276,
		ToggleTableCellInsideHorizontalBorders = 277,
		ToggleTableCellInsideVerticalBorders = 278,
		ToggleTableViewGridlines = 295,
		ChangeTableCellShading = 294
	}
	export enum TableLayoutTabCommandId {
		SelectMenu = 445,
		DeleteMenu = 446,
		InsertMenu = 447,
		AutoFitMenu = 448,
		AlignmentMenu = 449,
		SelectTableCell = 286,
		SelectTableColumn = 287,
		SelectTableRow = 288,
		SelectTable = 289,
		ToggleShowTableGridLines = 295,
		ShowDeleteCellsDialog = 253,
		DeleteTableColumns = 248,
		DeleteTableRows = 247,
		DeleteTable = 251,
		InsertTableRowAbove = 246,
		InsertTableRowBelow = 245,
		InsertTableColumnToTheLeft = 243,
		InsertTableColumnToTheRight = 244,
		MergeTableCells = 254,
		ShowSplitCellsDialog = 255,
		SetAutoFitContents = 399,
		SetAutoFitWindow = 400,
		SetFixedColumnWidth = 401,
		TableCellAlignTopLeft = 260,
		TableCellAlignTopCenter = 261,
		TableCellAlignTopRight = 262,
		TableCellAlignMiddleLeft = 263,
		TableCellAlignMiddleCenter = 264,
		TableCellAlignMiddleRight = 265,
		TableCellAlignBottomLeft = 266,
		TableCellAlignBottomCenter = 267,
		TableCellAlignBottomRight = 268
	}
	export enum FloatingObjectsFormatTabCommandId {
		WrapTextMenu = 450,
		PositionMenu = 451,
		BringToFrontMenu = 452,
		SendToBackMenu = 453,
		ChangeFloatingObjectFillColor = 343,
		ChangeFloatingObjectOutlineColor = 344,
		ChangeFloatingObjectOutlineWidth = 345,
		SetFloatingObjectInlineTextWrapType = 374,
		SetFloatingObjectSquareTextWrapType = 346,
		SetFloatingObjectTightTextWrapType = 347,
		SetFloatingObjectThroughTextWrapType = 348,
		SetFloatingObjectTopAndBottomTextWrapType = 349,
		SetFloatingObjectBehindTextWrapType = 350,
		SetFloatingObjectInFrontOfTextWrapType = 351,
		SetFloatingObjectTopLeftAlignment = 352,
		SetFloatingObjectTopCenterAlignment = 353,
		SetFloatingObjectTopRightAlignment = 354,
		SetFloatingObjectMiddleLeftAlignment = 355,
		SetFloatingObjectMiddleCenterAlignment = 356,
		SetFloatingObjectMiddleRightAlignment = 357,
		SetFloatingObjectBottomLeftAlignment = 358,
		SetFloatingObjectBottomCenterAlignment = 359,
		SetFloatingObjectBottomRightAlignment = 360,
		FloatingObjectBringForward = 361,
		FloatingObjectBringToFront = 362,
		FloatingObjectBringInFrontOfText = 363,
		FloatingObjectSendBackward = 364,
		FloatingObjectSendToBack = 365,
		FloatingObjectSendBehindText = 366
	}
	export enum ContextMenuCommandId {
		ApplySpellingSuggestion = 318,
		NoSpellingSuggestions = 457,
		IgnoreSpellingError = 314,
		IgnoreAllSpellingErrors = 315,
		AddWordToDictionary = 317,
		OpenHyperlink = 195,
		ShowEditHyperlinkDialog = 194,
		RemoveHyperlink = 196,
		UpdateField = 179,
		ToggleFieldCodes = 180,
		RestartNumberedList = 170,
		ContinueNumberedList = 189,
		Cut = 10,
		Copy = 9,
		Paste = 8,
		TableMenu = 239,
		InsertTableColumnToTheLeft = 243,
		InsertTableColumnToTheRight = 244,
		InsertTableRowAbove = 246,
		InsertTableRowBelow = 245,
		ShowInsertTableCellsDialog = 252,
		ShowDeleteTableCellsDialog = 253,
		ShowSplitCellsDialog = 255,
		MergeTableCells = 254,
		DecreaseParagraphIndent = 34,
		IncreaseParagraphIndent = 35,
		ShowFontDialog = 52,
		ShowParagraphDialog = 53,
		ShowBookmarkDialog = 58,
		ShowHyperlinkDialog = 59,
		ChangeFloatingObjectTextWrapTypeMenu = 454,
		SetFloatingObjectInlineTextWrapType = 374,
		SetFloatingObjectSquareTextWrapType = 346,
		SetFloatingObjectTightTextWrapType = 347,
		SetFloatingObjectThroughTextWrapType = 348,
		SetFloatingObjectTopAndBottomTextWrapType = 349,
		SetFloatingObjectBehindTextWrapType = 350,
		SetFloatingObjectInFrontOfTextWrapType = 351,
		FloatingObjectBringForwardMenu = 455,
		FloatingObjectBringForward = 361,
		FloatingObjectBringToFront = 362,
		FloatingObjectBringInFrontOfText = 363,
		FloatingObjectSendBackwardMenu = 456,
		FloatingObjectSendBackward = 364,
		FloatingObjectSendToBack = 365,
		FloatingObjectSendBehindText = 366,
		SelectAll = 106
	}
	export type CommandId = FileTabCommandId | HomeTabCommandId | InsertTabCommandId | PageLayoutTabCommandId | ReferencesTabCommandId | MailMergeTabCommandId | ViewTabCommandId | HeaderAndFooterTabCommandId | TableDesignTabCommandId | TableLayoutTabCommandId | FloatingObjectsFormatTabCommandId | ContextMenuCommandId;
	export interface IContextMenuItemOptions {
		text?: string;
		localizationId?: string;
		beginGroup?: boolean;
		icon?: string;
		disabled?: boolean;
		visible?: boolean;
		items?: ContextMenuItem[];
	}
	export class ContextMenuItem {
		text: string;
		localizationId?: string;
		id: CommandId | string;
		disabled: boolean;
		visible: boolean;
		beginGroup: boolean;
		items?: ContextMenuItem[];
		icon?: string;
		constructor(id: CommandId | string, options: IContextMenuItemOptions);
	}
	export enum FileTabItemId {
		CreateNewDocument = 412,
		OpenDocument = 410,
		ExportDocument = 413,
		Download = 414,
		DownloadDocx = 418,
		DownloadRtf = 419,
		DownloadTxt = 420,
		DownloadHtml = 421,
		PrintDocument = 416
	}
	export enum HomeTabItemId {
		ChangeCaseMenu = 431,
		AlignParagraphMenu = 432,
		LineSpacingMenu = 433,
		Undo = 6,
		Redo = 7,
		Cut = 10,
		Copy = 9,
		Paste = 8,
		ChangeFontName = 11,
		ChangeFontSize = 13,
		IncreaseFontSize = 14,
		DecreaseFontSize = 15,
		ChangeFontForeColor = 28,
		ChangeFontHighlightColor = 29,
		ShowFontDialog = 52,
		ToggleFontBold = 20,
		ToggleFontItalic = 21,
		ToggleFontUnderline = 22,
		ToggleFontDoubleUnderline = 23,
		ToggleFontStrikeout = 24,
		ToggleFontSubscript = 27,
		ToggleFontSuperscript = 26,
		CapitalizationSentenceCase = 207,
		CapitalizationUpperCase = 16,
		CapitalizationLowerCase = 17,
		CapitalizeEachWordTextCase = 18,
		CapitalizationToggleCase = 19,
		ClearFormatting = 30,
		ToggleBulletedList = 31,
		ToggleNumberedList = 32,
		ToggleMultilevelList = 33,
		ToggleParagraphAlignmentLeft = 37,
		ToggleParagraphAlignmentCenter = 38,
		ToggleParagraphAlignmentRight = 39,
		ToggleParagraphAlignmentJustify = 40,
		ToggleShowHiddenSymbols = 36,
		SetSingleParagraphSpacing = 41,
		SetSesquialteralParagraphSpacing = 42,
		SetDoubleParagraphSpacing = 43,
		AddSpacingBeforeParagraph = 45,
		AddSpacingAfterParagraph = 46,
		RemoveSpacingBeforeParagraph = 47,
		RemoveSpacingAfterParagraph = 48,
		ChangeParagraphBackColor = 49,
		ChangeStyle = 12,
		Find = 50,
		Replace = 51
	}
	export enum InsertTabItemId {
		ShowInsertTableDialog = 55,
		InsertPictureLocally = 411,
		ShowBookmarkDialog = 58,
		ShowHyperlinkDialog = 59,
		InsertHeader = 220,
		InsertFooter = 221,
		InsertPageNumberField = 235,
		InsertPageCountField = 236,
		InsertFloatingTextBox = 368
	}
	export enum PageLayoutTabItemId {
		MarginsMenu = 434,
		OrientationMenu = 435,
		SizeMenu = 436,
		ColumnsMenu = 437,
		BreaksMenu = 438,
		SetNormalSectionPageMargins = 66,
		SetNarrowSectionPageMargins = 67,
		SetModerateSectionPageMargins = 68,
		SetWideSectionPageMargins = 69,
		ShowMarginsPageSetupDialog = 70,
		SetPortraitPageOrientation = 71,
		SetLandscapePageOrientation = 72,
		SetSectionLetterPaperSize = 162,
		SetSectionLegalPaperSize = 99,
		SetSectionFolioPaperSize = 100,
		SetSectionA4PaperSize = 101,
		SetSectionB5PaperSize = 104,
		SetSectionExecutivePaperSize = 105,
		SetSectionA5PaperSize = 102,
		SetSectionA6PaperSize = 103,
		ShowPaperPageSetupDialog = 73,
		SetSectionOneColumn = 74,
		SetSectionTwoColumns = 75,
		SetSectionThreeColumns = 76,
		InsertPageBreak = 54,
		InsertColumnBreak = 79,
		InsertSectionBreakNextPage = 80,
		InsertSectionBreakEvenPage = 81,
		InsertSectionBreakOddPage = 82,
		ChangePageColor = 90
	}
	export enum ReferencesTabItemId {
		AddTextMenu = 439,
		InsertCaptionMenu = 440,
		InsertTableOfFiguresMenu = 441,
		InsertTableOfContents = 377,
		SetParagraphBodyTextLevel = 385,
		SetParagraphHeading1Level = 386,
		SetParagraphHeading2Level = 387,
		SetParagraphHeading3Level = 388,
		SetParagraphHeading4Level = 389,
		SetParagraphHeading5Level = 390,
		SetParagraphHeading6Level = 391,
		SetParagraphHeading7Level = 392,
		SetParagraphHeading8Level = 393,
		SetParagraphHeading9Level = 394,
		CreateFigureCaptionField = 382,
		CreateTableCaptionField = 383,
		CreateEquationCaptionField = 381,
		CreateTableOfFiguresField = 379,
		CreateTableOfTablesField = 380,
		CreateTableOfEquationsField = 378,
		UpdateTableOfContents = 384
	}
	export enum MailMergeTabItemId {
		CreateFieldMenu = 442,
		CreateField = 178,
		CreateDateField = 203,
		CreateTimeField = 204,
		CreatePageField = 205,
		CreateNumPagesField = 236,
		CreateEmptyMergeField = 372,
		CreateEmptyDocVariableField = 373,
		ShowInsertMergeFieldDialog = 214,
		ToggleViewMergedData = 213,
		ShowAllFieldCodes = 186,
		ShowAllFieldResults = 187,
		UpdateAllFields = 200,
		GoToFirstDataRecord = 209,
		GoToPreviousDataRecord = 210,
		GoToNextDataRecord = 211,
		GoToLastDataRecord = 212,
		ShowMailMergeDialog = 216
	}
	export enum ViewTabItemId {
		SwitchToSimpleView = 405,
		SwitchToPrintLayout = 406,
		ToggleShowHorizontalRuler = 94,
		ToggleFullScreen = 98
	}
	export enum HeaderAndFooterTabItemId {
		GoToPageHeader = 227,
		GoToPageFooter = 228,
		GoToPreviousPageHeaderFooter = 230,
		GoToNextPageHeaderFooter = 229,
		LinkHeaderFooterToPrevious = 222,
		ToggleDifferentFirstPage = 231,
		ToggleDifferentOddAndEvenPages = 232,
		ChangeHeaderOffset = 330,
		ChangeFooterOffset = 331,
		ClosePageHeaderFooter = 233
	}
	export enum TableDesignTabItemId {
		TableStyleOptionsMenu = 443,
		BordersMenu = 444,
		ToggleFirstRow = 280,
		ToggleLastRow = 281,
		ToggleBandedRows = 284,
		ToggleFirstColumn = 282,
		ToggleLastColumn = 283,
		ToggleBandedColumn = 285,
		ApplyTableStyle = 269,
		ChangeTableBorderStyleRepositoryItem = 292,
		ChangeTableBorderWidthRepositoryItem = 291,
		ChangeTableBorderColorRepositoryItem = 290,
		ToggleTableCellsBottomBorder = 272,
		ToggleTableCellsTopBorder = 270,
		ToggleTableCellsLeftBorder = 273,
		ToggleTableCellsRightBorder = 271,
		ToggleTableCellNoBorder = 274,
		ToggleTableCellAllBorders = 275,
		ToggleTableCellOutsideBorders = 279,
		ToggleTableCellInsideBorders = 276,
		ToggleTableCellInsideHorizontalBorders = 277,
		ToggleTableCellInsideVerticalBorders = 278,
		ToggleShowTableGridLines = 295,
		ChangeTableCellShading = 294
	}
	export enum TableLayoutTabItemId {
		SelectMenu = 445,
		DeleteMenu = 446,
		InsertMenu = 447,
		AutoFitMenu = 448,
		AlignmentMenu = 449,
		SelectTableCell = 286,
		SelectTableColumn = 287,
		SelectTableRow = 288,
		SelectTable = 289,
		ToggleShowTableGridLines = 295,
		ShowDeleteTableCellsDialog = 253,
		DeleteTableColumns = 248,
		DeleteTableRows = 247,
		DeleteTable = 251,
		InsertTableRowAbove = 246,
		InsertTableRowBelow = 245,
		InsertTableColumnToTheLeft = 243,
		InsertTableColumnToTheRight = 244,
		MergeTableCells = 254,
		ShowSplitTableCellsDialog = 255,
		SetAutoFitContents = 399,
		SetAutoFitWindow = 400,
		SetFixedColumnWidth = 401,
		TableCellAlignTopLeft = 260,
		TableCellAlignTopCenter = 261,
		TableCellAlignTopRight = 262,
		TableCellAlignMiddleLeft = 263,
		TableCellAlignMiddleCenter = 264,
		TableCellAlignMiddleRight = 265,
		TableCellAlignBottomLeft = 266,
		TableCellAlignBottomCenter = 267,
		TableCellAlignBottomRight = 268
	}
	export enum FloatingObjectsFormatTabItemId {
		WrapTextMenu = 450,
		PositionMenu = 451,
		BringForwardMenu = 452,
		SendBackwardMenu = 453,
		ChangeFloatingObjectFillColor = 343,
		ChangeFloatingObjectOutlineColor = 344,
		ChangeFloatingObjectOutlineWidth = 345,
		SetFloatingObjectInlineTextWrapType = 374,
		SetFloatingObjectSquareTextWrapType = 346,
		SetFloatingObjectTightTextWrapType = 347,
		SetFloatingObjectThroughTextWrapType = 348,
		SetFloatingObjectTopAndBottomTextWrapType = 349,
		SetFloatingObjectBehindTextWrapType = 350,
		SetFloatingObjectInFrontOfTextWrapType = 351,
		SetFloatingObjectTopLeftAlignment = 352,
		SetFloatingObjectTopCenterAlignment = 353,
		SetFloatingObjectTopRightAlignment = 354,
		SetFloatingObjectMiddleLeftAlignment = 355,
		SetFloatingObjectMiddleCenterAlignment = 356,
		SetFloatingObjectMiddleRightAlignment = 357,
		SetFloatingObjectBottomLeftAlignment = 358,
		SetFloatingObjectBottomCenterAlignment = 359,
		SetFloatingObjectBottomRightAlignment = 360,
		FloatingObjectBringForward = 361,
		FloatingObjectBringToFront = 362,
		FloatingObjectBringInFrontOfText = 363,
		FloatingObjectSendBackward = 364,
		FloatingObjectSendToBack = 365,
		FloatingObjectSendBehindText = 366
	}
	export type RibbonItemId = string | FileTabItemId | HomeTabItemId | InsertTabItemId | PageLayoutTabItemId | ReferencesTabItemId | MailMergeTabItemId | ViewTabItemId | HeaderAndFooterTabItemId | TableDesignTabItemId | TableLayoutTabItemId | FloatingObjectsFormatTabItemId;
	export interface IContextMenu {
		enabled: boolean;
		items: ContextMenuItem[];
		getItem(id: CommandId | RibbonItemId): ContextMenuItem | null;
		removeItem(item: ContextMenuItem): ContextMenuItem | null;
		removeItem(id: CommandId | RibbonItemId): ContextMenuItem | null;
		insertItem(item: ContextMenuItem, index?: number): ContextMenuItem;
		insertItemBefore(item: ContextMenuItem, target: ContextMenuItem | CommandId | RibbonItemId): ContextMenuItem;
		insertItemAfter(item: ContextMenuItem, target: ContextMenuItem | CommandId | RibbonItemId): ContextMenuItem;
	}
	export class RangePermissionOptions {
		get highlightRanges(): boolean;
		set highlightRanges(value: boolean);
		get showBrackets(): boolean;
		set showBrackets(value: boolean);
		get highlightColor(): string;
		set highlightColor(value: string);
		get bracketsColor(): string;
		set bracketsColor(value: string);
	}
	export type NusaCommandId = 'DxReFontColor' | 'DxReFontSize';
	export interface NusaCommand {
		commandId: NusaCommandId;
		phrase: string;
		title: string | null;
		description: string;
	}
	export interface NusaCommandSet {
		title: string;
		description: string;
		commands: NusaCommand[];
	}
	export type NusaRichEditPlaceholderId = 'DxReColorName';
	export interface NusaPlaceholder {
		id: NusaRichEditPlaceholderId;
		description: string;
		values: ({
			spokenForm: string;
			value: string;
		} | string[])[];
	}
	export interface NusaCustomControlType {
		newlineFormat: string;
		paragraphFormat: string;
		replaceText(element: HTMLElement, text: string, fromPos: number, length: number): void;
		getText(element: HTMLElement): string;
		getSelectionText(element: HTMLElement): string;
		getSelection(element: HTMLElement): {
			start: number;
			length: number;
		};
		setSelection(element: HTMLElement, start: number, length: number): void;
	}
	export interface NusaCustomContainerType {
		getFocussedElement(containerElement: HTMLElement): HTMLElement;
		setFocussedElement(element: HTMLElement): void;
	}
	export interface NusaRegisterOptions {
		customControlType?: string;
		customContainerType?: string;
		conceptName?: string;
	}
	export class NusaSettings {
		get registered(): boolean;
		getFocusedRichEdit(): RichEdit | null;
		registerCommands(options?: {
			customizeCommands?: (commandSets: NusaCommandSet[], placeholders: NusaPlaceholder[]) => void;
		}): void;
		getCommandHandler(): (commandId: string, placeholderIds: string[], placeholderValues: string[]) => boolean;
		getCustomControl(): NusaCustomControlType | null;
		getCustomContainer(): NusaCustomContainerType | null;
		unregister(): void;
		register(options?: NusaRegisterOptions): void;
	}
	export class SpellCheckerOptions {
		get isEnabled(): boolean;
		set isEnabled(value: boolean);
	}
	export class EventArgs {
	}
	export class Event<TSource, TEventArgs extends EventArgs> {
		addHandler(handler: (s?: TSource, e?: TEventArgs) => void, executionContext?: TSource): void;
		removeHandler(handler: (s?: TSource, e?: TEventArgs) => void, executionContext?: TSource): void;
		clearHandlers(): void;
		isEmpty(): boolean;
	}
	export class RichEditEvent<TEventArgs extends EventArgs> extends Event<RichEdit, TEventArgs> {
	}
	export class SelectionChangedEvent extends RichEditEvent<EventArgs> {
	}
	export class DocumentLoadedEvent extends RichEditEvent<EventArgs> {
	}
	export class DocumentFormattedEventArgs extends EventArgs {
		pageCount: number;
	}
	export class DocumentFormattedEvent extends RichEditEvent<DocumentFormattedEventArgs> {
	}
	export class DocumentChangedEvent extends RichEditEvent<EventArgs> {
	}
	export class ActiveSubDocumentChangedEvent extends RichEditEvent<EventArgs> {
	}
	export class GotFocusEvent extends RichEditEvent<EventArgs> {
	}
	export class LostFocusEvent extends RichEditEvent<EventArgs> {
	}
	export enum DocumentLinkType {
		Hyperlink = 0,
		Bookmark = 1,
		EmailAddress = 2,
		Document = 3
	}
	export class HyperlinkClickEventArgs extends EventArgs {
		handled: boolean;
		htmlEvent: MouseEvent;
		hyperlinkType: DocumentLinkType;
		targetUri: string;
		hyperlink: Hyperlink;
	}
	export class HyperlinkClickEvent extends RichEditEvent<HyperlinkClickEventArgs> {
	}
	export class PointerEventArgs extends EventArgs {
		handled: boolean;
		htmlEvent: MouseEvent;
	}
	export class PointerDownEvent extends RichEditEvent<PointerEventArgs> {
	}
	export class PointerUpEvent extends RichEditEvent<PointerEventArgs> {
	}
	export class KeyboardEventArgs extends EventArgs {
		handled: boolean;
		htmlEvent: KeyboardEvent;
	}
	export class KeyDownEvent extends RichEditEvent<KeyboardEventArgs> {
	}
	export class KeyUpEvent extends RichEditEvent<KeyboardEventArgs> {
	}
	export abstract class DocumentProcessorBase {
		document: RichEditDocumentBase;
		readonly unitConverter: UnitConverter;
		set onCalculateDocumentVariable(val: null | ((s: DocumentProcessorBase, e: CalculateDocumentVariableEventArgs) => void));
		importDocument(source: string | File, documentFormat: DocumentFormat, callback: (importSuccess: boolean) => void): void;
		exportDocumentToBase64(callback: (base64: string) => void, documentFormat?: DocumentFormat): void;
		exportDocumentToBlob(callback: (blob: Blob) => void, documentFormat?: DocumentFormat): void;
		downloadDocument(fileName: string, documentFormat: DocumentFormat): void;
		exportToPdf(callback: (base64: string, blob: Blob, stream: any) => void, options?: ((pdfDocument: any) => void) | {
			modifyPdfDocument?: (pdfDocument: any) => void;
			modifyPdfPage?: (pdfDocument: any) => void;
		}): void;
		downloadPdf(fileName: string, options?: ((pdfDocument: any) => void) | {
			modifyPdfDocument?: (pdfDocument: any) => void;
			modifyPdfPage?: (pdfDocument: any) => void;
		}): void;
		dispose(): void;
	}
	export class CalculateDocumentVariableEventArgs extends EventArgs {
		variableName: string;
		args: string[];
		value: null | string | DocumentProcessorBase;
		keepLastParagraph: boolean;
		readonly fieldInterval: Interval;
	}
	export class CalculateDocumentVariableEvent extends RichEditEvent<CalculateDocumentVariableEventArgs> {
	}
	export class ContentChangedEventArgs extends EventArgs {
		subDocumentId: number;
		interval: Interval;
	}
	export class ContentInsertedEvent extends RichEditEvent<ContentChangedEventArgs> {
	}
	export class ContentRemovedEventArgs extends ContentChangedEventArgs {
		removedText: string;
	}
	export class ContentRemovedEvent extends RichEditEvent<ContentRemovedEventArgs> {
	}
	export class CharacterPropertiesChangedEvent extends RichEditEvent<ContentChangedEventArgs> {
	}
	export class ParagraphPropertiesChangedEventArgs extends EventArgs {
		subDocumentId: number;
		paragraphIndex: number;
	}
	export class ParagraphPropertiesChangedEvent extends RichEditEvent<ParagraphPropertiesChangedEventArgs> {
	}
	export class AutoCorrectEventArgs extends EventArgs {
		handled: boolean;
		text: string;
		interval: Interval;
	}
	export class AutoCorrectEvent extends RichEditEvent<AutoCorrectEventArgs> {
	}
	export class SavingEventArgs extends EventArgs {
		handled: boolean;
		base64: string;
		fileName: string;
		format: DocumentFormat;
		reason: string;
	}
	export class SavingEvent extends RichEditEvent<SavingEventArgs> {
	}
	export class SavedEventArgs extends EventArgs {
		success: boolean;
		reason: string;
	}
	export class SavedEvent extends RichEditEvent<SavedEventArgs> {
	}
	export class CustomCommandExecutedEventArgs extends EventArgs {
		commandName: string;
		parameter: any;
	}
	export class CustomCommandExecutedEvent extends RichEditEvent<CustomCommandExecutedEventArgs> {
	}
	export class PdfExportingEventArgs extends EventArgs {
		base64: string;
		blob: Blob;
		blobStream: any;
		handled: boolean;
	}
	export class PdfExportingEvent extends RichEditEvent<PdfExportingEventArgs> {
	}
	export class PdfExportedEventArgs extends EventArgs {
		success: boolean;
	}
	export class PdfExportedEvent extends RichEditEvent<PdfExportedEventArgs> {
	}
	export class CommandStateChangedEventArgs extends EventArgs {
		commands: null | CommandId[];
	}
	export class CommandStateChangedEvent extends RichEditEvent<CommandStateChangedEventArgs> {
	}
	export class DocumentVariableData {
		callback: (value: null | string | DocumentProcessorBase, keepLastParagraph?: boolean) => void;
		variableName: string;
		args: string[];
		readonly fieldInterval: Interval;
	}
	export class CalculateDocumentVariableAsyncEventArgs extends EventArgs {
		readonly data: DocumentVariableData[];
	}
	export class CalculateDocumentVariableAsyncEvent extends RichEditEvent<CalculateDocumentVariableAsyncEventArgs> {
	}
	export class ContextMenuShowingEventArgs extends EventArgs {
		readonly contextMenu: IContextMenu;
	}
	export class ContextMenuShowingEvent extends RichEditEvent<ContextMenuShowingEventArgs> {
	}
	export class Events {
		readonly selectionChanged: SelectionChangedEvent;
		readonly documentLoaded: DocumentLoadedEvent;
		readonly documentFormatted: DocumentFormattedEvent;
		readonly documentChanged: DocumentChangedEvent;
		readonly activeSubDocumentChanged: ActiveSubDocumentChangedEvent;
		readonly gotFocus: GotFocusEvent;
		readonly lostFocus: LostFocusEvent;
		readonly hyperlinkClick: HyperlinkClickEvent;
		readonly pointerDown: PointerDownEvent;
		readonly pointerUp: PointerUpEvent;
		readonly keyDown: KeyDownEvent;
		readonly keyUp: KeyUpEvent;
		readonly calculateDocumentVariable: CalculateDocumentVariableEvent;
		readonly contentInserted: ContentInsertedEvent;
		readonly contentRemoved: ContentRemovedEvent;
		readonly characterPropertiesChanged: CharacterPropertiesChangedEvent;
		readonly paragraphPropertiesChanged: ParagraphPropertiesChangedEvent;
		readonly autoCorrect: AutoCorrectEvent;
		readonly saving: SavingEvent;
		readonly saved: SavedEvent;
		readonly customCommandExecuted: CustomCommandExecutedEvent;
		readonly pdfExporting: PdfExportingEvent;
		readonly pdfExported: PdfExportedEvent;
		readonly commandStateChanged: CommandStateChangedEvent;
		readonly calculateDocumentVariableAsync: CalculateDocumentVariableAsyncEvent;
		readonly contextMenuShowing: ContextMenuShowingEvent;
		clear(): void;
	}
	export enum PrintMode {
		Html = 1,
		Pdf = 2
	}
	export interface IPrintingSettings {
		mode?: PrintMode;
		closePrintDialogWithHtmlPreview?: boolean;
	}
	export enum KeyCode {
		Backspace = 8,
		Tab = 9,
		Enter = 13,
		Pause = 19,
		CapsLock = 20,
		Esc = 27,
		Spacebar = 32,
		PageUp = 33,
		PageDown = 34,
		End = 35,
		Home = 36,
		Left = 37,
		Up = 38,
		Right = 39,
		Down = 40,
		Insert = 45,
		Delete = 46,
		Key_0 = 48,
		Key_1 = 49,
		Key_2 = 50,
		Key_3 = 51,
		Key_4 = 52,
		Key_5 = 53,
		Key_6 = 54,
		Key_7 = 55,
		Key_8 = 56,
		Key_9 = 57,
		Key_a = 65,
		Key_b = 66,
		Key_c = 67,
		Key_d = 68,
		Key_e = 69,
		Key_f = 70,
		Key_g = 71,
		Key_h = 72,
		Key_i = 73,
		Key_j = 74,
		Key_k = 75,
		Key_l = 76,
		Key_m = 77,
		Key_n = 78,
		Key_o = 79,
		Key_p = 80,
		Key_q = 81,
		Key_r = 82,
		Key_s = 83,
		Key_t = 84,
		Key_u = 85,
		Key_v = 86,
		Key_w = 87,
		Key_x = 88,
		Key_y = 89,
		Key_z = 90,
		Windows = 91,
		ApplicationKey = 93,
		Numpad_0 = 96,
		Numpad_1 = 97,
		Numpad_2 = 98,
		Numpad_3 = 99,
		Numpad_4 = 100,
		Numpad_5 = 101,
		Numpad_6 = 102,
		Numpad_7 = 103,
		Numpad_8 = 104,
		Numpad_9 = 105,
		Asterisk = 106,
		PlusSign = 107,
		MinusSign = 109,
		Numpad_Period = 110,
		Numpad_Slash = 111,
		F1 = 112,
		F2 = 113,
		F3 = 114,
		F4 = 115,
		F5 = 116,
		F6 = 117,
		F7 = 118,
		F8 = 119,
		F9 = 120,
		F10 = 121,
		F11 = 122,
		F12 = 123,
		NumLock = 144,
		ScrollLock = 145,
		Semicolon = 186,
		EqualsSign = 187,
		Comma = 188,
		Hyphen = 189,
		Period = 190,
		Slash = 191,
		GraveAccent = 192,
		OpenBracket = 219,
		BackSlash = 220,
		CloseBracket = 221,
		Quotes = 222
	}
	export class ShortcutOptions {
		keyCode: KeyCode;
		alt: boolean;
		ctrl: boolean;
		shift: boolean;
		meta: boolean;
		constructor(keyCode: KeyCode, ctrl?: boolean, alt?: boolean, shift?: boolean, meta?: boolean);
	}
	export enum RibbonTabType {
		File = 0,
		Home = 1,
		Insert = 2,
		PageLayout = 3,
		References = 4,
		MailMerge = 5,
		View = 6,
		HeadersFooters = 7,
		TableDesign = 8,
		TableLayout = 9,
		FloatingObjectsFormat = 10
	}
	export type RibbonTabId = string | RibbonTabType;
	export enum RibbonItemType {
		Button = 0,
		SelectBox = 1,
		Menu = 2,
		NumberBox = 3,
		ColorBox = 4,
		SubMenu = 5
	}
	export abstract class RibbonItemBase {
		abstract readonly type: RibbonItemType;
		beginGroup: boolean;
		id: RibbonItemId;
	}
	export interface RibbonButtonItemOptions {
		showText?: boolean;
		toggleMode?: boolean;
		selected?: boolean;
		icon?: string;
		beginGroup?: boolean;
		localizationId?: string;
	}
	export class RibbonButtonItem extends RibbonItemBase {
		readonly type = RibbonItemType.Button;
		text: string;
		showText: boolean;
		toggleMode: boolean;
		selected: boolean;
		icon?: string;
		localizationId?: string;
		constructor(id: RibbonItemId, text: string, options?: RibbonButtonItemOptions);
	}
	export interface RibbonSubMenuItemOptions {
		icon?: string;
		beginGroup?: boolean;
		localizationId?: string;
	}
	export class RibbonSubMenuItem extends RibbonItemBase {
		readonly type = RibbonItemType.SubMenu;
		text: string;
		items: RibbonSubMenuItem[];
		icon?: string;
		localizationId?: string;
		constructor(id: RibbonItemId, text: string, items?: RibbonSubMenuItem[], options?: RibbonSubMenuItemOptions);
		convertToButton(): RibbonButtonItem;
	}
	export interface RibbonMenuItemOptions {
		icon?: string;
		showText?: boolean;
		beginGroup?: boolean;
		localizationId?: string;
	}
	export class RibbonMenuItem extends RibbonItemBase {
		readonly type = RibbonItemType.Menu;
		text: string;
		items: RibbonSubMenuItem[];
		showText: boolean;
		icon?: string;
		localizationId?: string;
		constructor(id: RibbonItemId, text: string, items: RibbonSubMenuItem[], options?: RibbonMenuItemOptions);
	}
	export interface RibbonItemTextOptions {
		text?: string;
		displayAfterEditor?: boolean;
	}
	export interface RibbonSelectBoxItemOptions {
		beginGroup?: boolean;
		width?: any;
		displayExpr?: string;
		valueExpr?: string;
		value?: any;
		textOptions?: RibbonItemTextOptions;
		showClearButton?: boolean;
		placeholder?: string;
		acceptCustomValue?: boolean;
		onCustomItemCreating?: any;
	}
	export class RibbonSelectBoxItem extends RibbonItemBase {
		readonly type = RibbonItemType.SelectBox;
		dataSource: any[];
		displayExpr?: string;
		valueExpr?: string;
		width?: any;
		value?: any;
		textOptions: RibbonItemTextOptions;
		showClearButton: boolean;
		placeholder?: string;
		acceptCustomValue?: boolean;
		onCustomItemCreating?: any;
		constructor(id: RibbonItemId, dataSource: any[] | any, options?: RibbonSelectBoxItemOptions);
	}
	export interface RibbonNumberBoxItemOptions {
		beginGroup?: boolean;
		min?: number;
		max?: number;
		step?: number;
		width?: any;
		localizationId?: string;
		format?: string;
		value?: number;
	}
	export class RibbonNumberBoxItem extends RibbonItemBase {
		readonly type = RibbonItemType.NumberBox;
		text: string;
		min?: number;
		max?: number;
		step: number;
		width?: any;
		localizationId?: string;
		format?: string;
		value?: number;
		constructor(id: RibbonItemId, text: string, options?: RibbonNumberBoxItemOptions);
	}
	export interface RibbonColorBoxItemOptions {
		beginGroup?: boolean;
		localizationId?: string;
		textOptions?: RibbonItemTextOptions;
	}
	export class RibbonColorBoxItem extends RibbonItemBase {
		readonly type = RibbonItemType.ColorBox;
		text: string;
		value: string;
		textOptions: RibbonItemTextOptions;
		localizationId?: string;
		constructor(id: RibbonItemId, text: string, value: string, options?: RibbonColorBoxItemOptions);
	}
	export type FirstLevelRibbonItem = RibbonButtonItem | RibbonMenuItem | RibbonSelectBoxItem | RibbonNumberBoxItem | RibbonColorBoxItem;
	export type RibbonItem = FirstLevelRibbonItem | RibbonSubMenuItem;
	export type RibbonItemParent = RibbonMenuItem | RibbonSubMenuItem | RibbonTab;
	export class RibbonTab {
		id: RibbonTabId;
		title: string;
		items: FirstLevelRibbonItem[];
		localizationId?: string;
		get contextTab(): boolean;
		constructor(title: string, id: RibbonTabId, items?: FirstLevelRibbonItem[], localizationId?: string);
		removeItem(id: RibbonItemId): void;
		removeItem(item: RibbonItem): void;
		getItem(id: RibbonItemId): RibbonItem | null;
		insertItem(item: RibbonItem, index?: number): FirstLevelRibbonItem;
		insertItemBefore(item: RibbonItem, target: RibbonItem | RibbonItemId | CommandId): RibbonItem;
		insertItemAfter(item: RibbonItem, target: RibbonItem | RibbonItemId | CommandId): RibbonItem;
		forEachItem(callback: (item: RibbonItem, index: number, parent: RibbonItemParent) => void, recursive?: boolean): void;
	}
	export class Ribbon {
		visible: boolean;
		activeTabIndex: number;
		clearTabs(): void;
		removeTab(tab: RibbonTab): RibbonTab | null;
		removeTab(id: RibbonTabId): RibbonTab | null;
		insertTab(tab: RibbonTab, index?: number): RibbonTab;
		insertTabBefore(tab: RibbonTab, target: RibbonTab | RibbonTabId): RibbonTab;
		insertTabAfter(tab: RibbonTab, target: RibbonTab | RibbonTabId): RibbonTab;
		getTab(id: RibbonTabId): RibbonTab | null;
	}
	export interface ICustomLoadingPanel {
		visible?: boolean;
		dispose?(): void;
		show(): void;
		hide(): void;
	}
	export class LoadingPanel {
		get enabled(): boolean;
		set enabled(value: boolean);
		get customPanel(): undefined | ICustomLoadingPanel;
		set customPanel(value: undefined | ICustomLoadingPanel);
		show(): void;
		hide(): void;
	}
	export class CommandState {
		readonly visible: boolean;
		readonly enabled: boolean;
		readonly value?: any;
	}
	export class RichEdit {
		readonly document: RichEditDocument;
		readonly layout: RichEditLayout;
		readonly selection: RichEditSelection;
		readonly history: History;
		readonly unitConverter: UnitConverter;
		readonly mailMergeOptions: MailMergeOptions;
		readonly authenticationOptions: AuthenticationOptions;
		readonly simpleViewSettings: SimpleViewSettings;
		readonly contextMenu: IContextMenu;
		readonly rangePermissionOptions: RangePermissionOptions;
		readonly nusaSettings: NusaSettings;
		readonly spellCheckerOptions: SpellCheckerOptions;
		get events(): Events;
		exportToBase64(callback: (base64: string) => void, documentFormat?: DocumentFormat): void;
		exportToBlob(callback: (blob: Blob) => void, documentFormat?: DocumentFormat): void;
		exportToArrayBuffer(callback: (buffer: ArrayBuffer) => void, documentFormat?: DocumentFormat): void;
		exportToFile(callback: (file: File) => void, documentFormat?: DocumentFormat): void;
		exportToPdf(documentName?: string, options?: ((pdfDocument: any) => void) | {
			modifyPdfDocument?: (pdfDocument: any) => void;
			modifyPdfPage?: (pdfDocument: any) => void;
		}): void;
		downloadPdf(documentName?: string, options?: ((pdfDocument: any) => void) | {
			modifyPdfDocument?: (pdfDocument: any) => void;
			modifyPdfPage?: (pdfDocument: any) => void;
		}): void;
		adjust(): void;
		get isDocumentImported(): boolean;
		get fullScreen(): boolean;
		set fullScreen(value: boolean);
		get viewType(): ViewType;
		set viewType(type: ViewType);
		get readOnly(): boolean;
		set readOnly(value: boolean);
		get isDisposed(): boolean;
		get showHorizontalRuler(): boolean;
		set showHorizontalRuler(value: boolean);
		focus(): void;
		get fileName(): string;
		set fileName(name: string);
		get documentSaveFormat(): DocumentFormat;
		set documentSaveFormat(format: DocumentFormat);
		get documentName(): string;
		set documentName(name: string);
		get documentFormat(): DocumentFormat;
		set documentFormat(format: DocumentFormat);
		get documentExtension(): string;
		set documentExtension(filePath: string);
		get hasUnsavedChanges(): boolean;
		set hasUnsavedChanges(value: boolean);
		newDocument(): void;
		openDocument(fileContent?: File | Blob | ArrayBuffer | string, documentName?: string, documentFormat?: DocumentFormat, callback?: (importSuccess: boolean) => void): void;
		saveDocument(documentFormat?: DocumentFormat, reason?: string, documentName?: string): void;
		mailMerge(callback: (blob: Blob) => void, mergeMode?: MergeMode, documentFormat?: DocumentFormat, exportFrom?: number, exportRecordsCount?: number): void;
		downloadDocument(documentFormat?: DocumentFormat, documentName?: string): void;
		printDocument(mode?: PrintMode | IPrintingSettings): void;
		assignShortcut(shortcut: ShortcutOptions, callback: () => void): void;
		get printMode(): PrintMode;
		set printMode(val: PrintMode);
		updateRibbon(callback: (ribbon: Ribbon) => void): void;
		beginUpdate(): void;
		endUpdate(): void;
		get loadingPanel(): LoadingPanel;
		createDocumentProcessor(options?: IInitDocumentProcessorOptions): DocumentProcessorBase;
		dispose(): void;
		executeCommand(commandId: CommandId, parameter?: any): boolean;
		getCommandState(commandId: CommandId): CommandState;
		setCommandEnabled(command: RibbonItemId | CommandId, enabled: boolean): void;
	}
	export class DocumentProcessor extends DocumentProcessorBase {
	}
	export class Paddings implements IPaddings {
		left: number;
		right: number;
		top: number;
		bottom: number;
		constructor(top: number, right: number, bottom: number, left: number);
	}
	export interface IFilePathInfo {
		readonly path: string;
		readonly documentFormat: DocumentFormat | null;
		readonly extension: string;
		readonly directoryPath: string;
		readonly name: string;
		readonly nameWithoutExtension: string;
	}
	export class Utils {
		static download(content: File | Blob | ArrayBuffer | string, fileName: string): void;
		static parseFilePath(filePath: string): IFilePathInfo;
		static documentFormatToExtension(documentFormat: DocumentFormat): string;
		static getDocumentFormat(filePath: string): DocumentFormat | null;
		static convertArrayBufferToBase64(content: ArrayBuffer): string;
		static convertBlobToBase64(content: File | Blob, callback: (base64: string) => void): void;
		static convertToBlob(content: File | ArrayBuffer | string, options?: BlobPropertyBag): Blob;
		static convertToFile(content: Blob | ArrayBuffer | string, fileName?: string, options?: FilePropertyBag): File;
		static convertBase64ToArrayBuffer(content: string): ArrayBuffer;
		static convertBlobToArrayBuffer(content: File | Blob, callback: (buffer: ArrayBuffer) => void): void;
		static getIntervalComplement(bound: Interval, intervals: Interval[]): Interval[];
	}
	export class Characters {
		static readonly PageBreak: string;
		static readonly LineBreak: string;
		static readonly ParagraphBreak: string;
	}
	export enum RichEditUnit {
		Centimeter = 0,
		Inch = 1
	}
	export interface IBookmarkSettings {
		color?: string;
		visibility?: boolean;
	}
	export interface IFieldsSettings {
		updateFieldsBeforePrint?: boolean;
		updateFieldsOnPaste?: boolean;
		defaultTimeFormat?: string;
		defaultDateFormat?: string;
		openHyperlinkOnClick?: boolean;
		keepHyperlinkResultForInvalidReference?: boolean;
		createHyperlinkTooltip?: (hyperlinkTooltip: string, hint: string) => string;
	}
	export interface ISimpleViewSettings {
		paddings?: IPaddings;
		fixedWidth?: number;
	}
	export interface IPrintLayoutViewSettings {
		showHorizontalRuler?: boolean;
	}
	export interface IViewSettings {
		viewType?: ViewType;
		simpleViewSettings?: ISimpleViewSettings;
		printLayoutViewSettings?: IPrintLayoutViewSettings;
	}
	export interface IRichEditPdfSettings {
		pdfDocument?: new (options?: {
			autoFirstPage: boolean;
			defaultFont: any;
		}) => any;
		blobStream?: new () => any;
		exportUrl?: string;
		defaultFontName?: string;
		pdfKitScriptUrl?: string;
		convertImageToCompatibleFormat?: (base64: string) => Promise<string>;
	}
	export interface IRichEditSearchSettings {
		filterInterval?: (subDocument: SubDocumentBase, interval: IInterval) => boolean;
	}
	export interface IFontSettings {
		name: string;
		fontFamily: string;
		italicFontUri?: string;
		boldFontUri?: string;
		boldItalicFontUri?: string;
		regularFontUri?: string;
	}
	export interface IFontMappingRule {
		sourceFontFamily: string;
		destinationFontName: string;
	}
	export interface IFontMapping {
		defaultFontName?: string;
		rules?: IFontMappingRule[];
	}
	export interface IRichEditFontsSettings {
		defaultFolder?: string;
		fonts?: IFontSettings[];
		mappings?: IFontMapping;
	}
	export interface IConfirmOnLosingChangesSettings {
		enabled?: boolean;
		message?: string;
	}
	export interface IMailMergeSettings {
		viewMergedData?: boolean;
		activeRecord?: number;
		dataSource?: any[] | string | DevExpress.data.CustomStoreOptions | DevExpress.data.DataSourceOptions | DevExpress.data.Store | DevExpress.data.DataSource;
	}
	export interface IAutocorrectReplaceInfo {
		replace: string;
		with: string;
	}
	export interface IAutocorrectSettings {
		correctTwoInitialCapitals?: boolean;
		detectUrls?: boolean;
		enableAutomaticNumbering?: boolean;
		replaceTextAsYouType?: boolean;
		caseSensitiveReplacement?: boolean;
		replaceInfoCollection?: IAutocorrectReplaceInfo[];
	}
	export interface ISpellCheck {
		enabled?: boolean;
		suggestionCount?: number;
		checkWordSpelling?: (word: string, callback: (isCorrect: boolean, suggestions: string[]) => void) => void;
		addWordToDictionary?: (word: string) => void;
	}
	export interface IAuthenticationSettings {
		userName?: string;
		group?: string;
	}
	export interface IRangePermissionsSettings {
		bracketsColor?: string;
		highlightColor?: string;
		highlightRanges: boolean;
		showBrackets: boolean;
	}
	export interface EventHandlers {
		selectionChanged?: string | ((s: RichEdit, e: EventArgs) => void);
		documentLoaded?: string | ((s: RichEdit, e: EventArgs) => void);
		documentFormatted?: string | ((s: RichEdit, e: DocumentFormattedEventArgs) => void);
		documentChanged?: string | ((s: RichEdit, e: EventArgs) => void);
		activeSubDocumentChanged?: string | ((s: RichEdit, e: EventArgs) => void);
		gotFocus?: string | ((s: RichEdit, e: EventArgs) => void);
		lostFocus?: string | ((s: RichEdit, e: EventArgs) => void);
		hyperlinkClick?: string | ((s: RichEdit, e: HyperlinkClickEventArgs) => void);
		pointerDown?: string | ((s: RichEdit, e: PointerEventArgs) => void);
		pointerUp?: string | ((s: RichEdit, e: PointerEventArgs) => void);
		keyDown?: string | ((s: RichEdit, e: KeyboardEventArgs) => void);
		keyUp?: string | ((s: RichEdit, e: KeyboardEventArgs) => void);
		calculateDocumentVariable?: string | ((s: RichEdit, e: CalculateDocumentVariableEventArgs) => void);
		contentInserted?: string | ((s: RichEdit, e: ContentChangedEventArgs) => void);
		contentRemoved?: string | ((s: RichEdit, e: ContentRemovedEventArgs) => void);
		characterPropertiesChanged?: string | ((s: RichEdit, e: ContentChangedEventArgs) => void);
		paragraphPropertiesChanged?: string | ((s: RichEdit, e: ParagraphPropertiesChangedEventArgs) => void);
		saving?: string | ((s: RichEdit, e: SavingEventArgs) => void);
		saved?: string | ((s: RichEdit, e: SavedEventArgs) => void);
		customCommandExecuted?: string | ((s: RichEdit, e: CustomCommandExecutedEventArgs) => void);
		pdfExporting?: string | ((s: RichEdit, e: PdfExportingEventArgs) => void);
		pdfExported?: string | ((s: RichEdit, e: PdfExportedEventArgs) => void);
		autoCorrect?: string | ((s: RichEdit, e: AutoCorrectEventArgs) => void);
		commandStateChanged?: string | ((s: RichEdit, e: CommandStateChangedEventArgs) => void);
		calculateDocumentVariableAsync?: string | ((s: RichEdit, e: CalculateDocumentVariableAsyncEventArgs) => void);
		contextMenuShowing?: string | ((s: RichEdit, e: ContextMenuShowingEventArgs) => void);
	}
	export interface Options {
		width?: string;
		height?: string;
		readOnly?: boolean;
		unit?: RichEditUnit;
		nonce?: string;
		exportUrl?: string;
		bookmarks?: IBookmarkSettings;
		fields?: IFieldsSettings;
		ribbon: Ribbon;
		view?: IViewSettings;
		pdf?: IRichEditPdfSettings;
		search?: IRichEditSearchSettings;
		fonts?: IRichEditFontsSettings;
		confirmOnLosingChanges?: IConfirmOnLosingChangesSettings;
		mailMerge?: IMailMergeSettings;
		autoCorrect?: IAutocorrectSettings;
		spellCheck?: ISpellCheck;
		authentication?: IAuthenticationSettings;
		rangePermissions?: IRangePermissionsSettings;
		printing?: IPrintingSettings;
		contextMenu?: IContextMenu;
		events: EventHandlers;
		document?: {
			content?: File | Blob | ArrayBuffer | string;
			name?: string;
			format?: DocumentFormat;
			onLoaded?: (importSuccess: boolean) => void;
		};
	}
	export function createOptions(): Options;
	export function create(htmlElement: HTMLElement, options: Options): RichEdit;
	export abstract class TableElementBase {
	}
	export enum TableWidthType {
		Auto = 1,
		Percent = 2,
		Twips = 3
	}
	export interface TableWidth {
		type: TableWidthType;
		value: number;
	}
	export enum TableContentHorizontalAlignment {
		Left = 0,
		Right = 1,
		Center = 2
	}
	export enum TableContentVerticalAlignment {
		Top = 0,
		Center = 2,
		Bottom = 3
	}
	export class TableBorder {
		style: BorderLineStyle;
		color: string;
		width: number;
	}
	export class TableBorders extends TableBordersBase implements ITableBorders {
		insideHorizontal: TableBorder;
		insideVertical: TableBorder;
	}
	export enum TableRowHeightType {
		Minimum = 0,
		Auto = 1,
		Exact = 2
	}
	export interface TableRowHeight {
		type: TableRowHeightType;
		value: number;
	}
	export class TableStyleOptions {
		headerRow: boolean;
		totalRow: boolean;
		bandedRows: boolean;
		firstColumn: boolean;
		lastColumn: boolean;
		bandedColumns: boolean;
	}
	export interface TableCellPosition {
		rowIndex: number;
		cellIndex: number;
	}
	export abstract class TableBaseCollection<TApi> extends Collection<TApi> {
	}
	export enum BorderLineStyle {
		Nil = -1,
		None = 0,
		Single = 1,
		Thick = 2,
		Double = 3,
		Dotted = 4,
		Dashed = 5,
		DotDash = 6,
		DotDotDash = 7,
		Triple = 8,
		ThinThickSmallGap = 9,
		ThickThinSmallGap = 10,
		ThinThickThinSmallGap = 11,
		ThinThickMediumGap = 12,
		ThickThinMediumGap = 13,
		ThinThickThinMediumGap = 14,
		ThinThickLargeGap = 15,
		ThickThinLargeGap = 16,
		ThinThickThinLargeGap = 17,
		Wave = 18,
		DoubleWave = 19,
		DashSmallGap = 20,
		DashDotStroked = 21,
		ThreeDEmboss = 22,
		ThreeDEngrave = 23,
		Outset = 24,
		Inset = 25,
		Apples = 26,
		ArchedScallops = 27,
		BabyPacifier = 28,
		BabyRattle = 29,
		Balloons3Colors = 30,
		BalloonsHotAir = 31,
		BasicBlackDashes = 32,
		BasicBlackDots = 33,
		BasicBlackSquares = 34,
		BasicThinLines = 35,
		BasicWhiteDashes = 36,
		BasicWhiteDots = 37,
		BasicWhiteSquares = 38,
		BasicWideInline = 39,
		BasicWideMidline = 40,
		BasicWideOutline = 41,
		Bats = 42,
		Birds = 43,
		BirdsFlight = 44,
		Cabins = 45,
		CakeSlice = 46,
		CandyCorn = 47,
		CelticKnotwork = 48,
		CertificateBanner = 49,
		ChainLink = 50,
		ChampagneBottle = 51,
		CheckedBarBlack = 52,
		CheckedBarColor = 53,
		Checkered = 54,
		ChristmasTree = 55,
		CirclesLines = 56,
		CirclesRectangles = 57,
		ClassicalWave = 58,
		Clocks = 59,
		Compass = 60,
		Confetti = 61,
		ConfettiGrays = 62,
		ConfettiOutline = 63,
		ConfettiStreamers = 64,
		ConfettiWhite = 65,
		CornerTriangles = 66,
		CouponCutoutDashes = 67,
		CouponCutoutDots = 68,
		CrazyMaze = 69,
		CreaturesButterfly = 70,
		CreaturesFish = 71,
		CreaturesInsects = 72,
		CreaturesLadyBug = 73,
		CrossStitch = 74,
		Cup = 75,
		DecoArch = 76,
		DecoArchColor = 77,
		DecoBlocks = 78,
		DiamondsGray = 79,
		DoubleD = 80,
		DoubleDiamonds = 81,
		Earth1 = 82,
		Earth2 = 83,
		EclipsingSquares1 = 84,
		EclipsingSquares2 = 85,
		EggsBlack = 86,
		Fans = 87,
		Film = 88,
		Firecrackers = 89,
		FlowersBlockPrint = 90,
		FlowersDaisies = 91,
		FlowersModern1 = 92,
		FlowersModern2 = 93,
		FlowersPansy = 94,
		FlowersRedRose = 95,
		FlowersRoses = 96,
		FlowersTeacup = 97,
		FlowersTiny = 98,
		Gems = 99,
		GingerbreadMan = 100,
		Gradient = 101,
		Handmade1 = 102,
		Handmade2 = 103,
		HeartBalloon = 104,
		HeartGray = 105,
		Hearts = 106,
		HeebieJeebies = 107,
		Holly = 108,
		HouseFunky = 109,
		Hypnotic = 110,
		IceCreamCones = 111,
		LightBulb = 112,
		Lightning1 = 113,
		Lightning2 = 114,
		MapleLeaf = 115,
		MapleMuffins = 116,
		MapPins = 117,
		Marquee = 118,
		MarqueeToothed = 119,
		Moons = 120,
		Mosaic = 121,
		MusicNotes = 122,
		Northwest = 123,
		Ovals = 124,
		Packages = 125,
		PalmsBlack = 126,
		PalmsColor = 127,
		PaperClips = 128,
		Papyrus = 129,
		PartyFavor = 130,
		PartyGlass = 131,
		Pencils = 132,
		People = 133,
		PeopleHats = 134,
		PeopleWaving = 135,
		Poinsettias = 136,
		PostageStamp = 137,
		Pumpkin1 = 138,
		PushPinNote1 = 139,
		PushPinNote2 = 140,
		Pyramids = 141,
		PyramidsAbove = 142,
		Quadrants = 143,
		Rings = 144,
		Safari = 145,
		Sawtooth = 146,
		SawtoothGray = 147,
		ScaredCat = 148,
		Seattle = 149,
		ShadowedSquares = 150,
		SharksTeeth = 151,
		ShorebirdTracks = 152,
		Skyrocket = 153,
		SnowflakeFancy = 154,
		Snowflakes = 155,
		Sombrero = 156,
		Southwest = 157,
		Stars = 158,
		Stars3d = 159,
		StarsBlack = 160,
		StarsShadowed = 161,
		StarsTop = 162,
		Sun = 163,
		Swirligig = 164,
		TornPaper = 165,
		TornPaperBlack = 166,
		Trees = 167,
		TriangleParty = 168,
		Triangles = 169,
		Tribal1 = 170,
		Tribal2 = 171,
		Tribal3 = 172,
		Tribal4 = 173,
		Tribal5 = 174,
		Tribal6 = 175,
		TwistedLines1 = 176,
		TwistedLines2 = 177,
		Vine = 178,
		Waveline = 179,
		WeavingAngles = 180,
		WeavingBraid = 181,
		WeavingRibbon = 182,
		WeavingStrips = 183,
		WhiteFlowers = 184,
		Woodwork = 185,
		XIllusions = 186,
		ZanyTriangles = 187,
		ZigZag = 188,
		ZigZagStitch = 189
	}
	export interface ITableCellBorders {
		top?: TableBorder;
		right?: TableBorder;
		bottom?: TableBorder;
		left?: TableBorder;
	}
	export class TableCellBorders extends TableBordersBase implements ITableCellBorders {
	}
	export interface IMargins {
		left?: number;
		right?: number;
		top?: number;
		bottom?: number;
	}
	export interface ITableBorders {
		top?: TableBorder;
		right?: TableBorder;
		bottom?: TableBorder;
		left?: TableBorder;
		insideHorizontal?: TableBorder;
		insideVertical?: TableBorder;
	}
	export abstract class TableBordersBase {
		top: TableBorder;
		right: TableBorder;
		bottom: TableBorder;
		left: TableBorder;
	}
}
