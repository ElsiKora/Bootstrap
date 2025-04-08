import type { ELoggerLogLevel } from "@domain/enum";

/**
 * The options for the console logger.
 */
export interface IConsoleLoggerOptions {
	/**
	 * The log level to use.
	 * @default ELoggerLogLevel.INFO
	 */
	level: ELoggerLogLevel;

	/**
	 * The source to use for the logger.
	 */
	source?: string;
}
