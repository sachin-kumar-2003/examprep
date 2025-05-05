import { SENSITIVE_STRING } from "@smithy/smithy-client";
import { BedrockRuntimeServiceException as __BaseException } from "./BedrockRuntimeServiceException";
export class AccessDeniedException extends __BaseException {
    name = "AccessDeniedException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
    }
}
export var AsyncInvokeOutputDataConfig;
(function (AsyncInvokeOutputDataConfig) {
    AsyncInvokeOutputDataConfig.visit = (value, visitor) => {
        if (value.s3OutputDataConfig !== undefined)
            return visitor.s3OutputDataConfig(value.s3OutputDataConfig);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(AsyncInvokeOutputDataConfig || (AsyncInvokeOutputDataConfig = {}));
export const AsyncInvokeStatus = {
    COMPLETED: "Completed",
    FAILED: "Failed",
    IN_PROGRESS: "InProgress",
};
export class InternalServerException extends __BaseException {
    name = "InternalServerException";
    $fault = "server";
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, InternalServerException.prototype);
    }
}
export class ThrottlingException extends __BaseException {
    name = "ThrottlingException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ThrottlingException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ThrottlingException.prototype);
    }
}
export class ValidationException extends __BaseException {
    name = "ValidationException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ValidationException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ValidationException.prototype);
    }
}
export const SortAsyncInvocationBy = {
    SUBMISSION_TIME: "SubmissionTime",
};
export const SortOrder = {
    ASCENDING: "Ascending",
    DESCENDING: "Descending",
};
export class ConflictException extends __BaseException {
    name = "ConflictException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ConflictException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ConflictException.prototype);
    }
}
export class ResourceNotFoundException extends __BaseException {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
export class ServiceQuotaExceededException extends __BaseException {
    name = "ServiceQuotaExceededException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ServiceQuotaExceededException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    }
}
export class ServiceUnavailableException extends __BaseException {
    name = "ServiceUnavailableException";
    $fault = "server";
    constructor(opts) {
        super({
            name: "ServiceUnavailableException",
            $fault: "server",
            ...opts,
        });
        Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    }
}
export const GuardrailImageFormat = {
    JPEG: "jpeg",
    PNG: "png",
};
export var GuardrailImageSource;
(function (GuardrailImageSource) {
    GuardrailImageSource.visit = (value, visitor) => {
        if (value.bytes !== undefined)
            return visitor.bytes(value.bytes);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(GuardrailImageSource || (GuardrailImageSource = {}));
export const GuardrailContentQualifier = {
    GROUNDING_SOURCE: "grounding_source",
    GUARD_CONTENT: "guard_content",
    QUERY: "query",
};
export var GuardrailContentBlock;
(function (GuardrailContentBlock) {
    GuardrailContentBlock.visit = (value, visitor) => {
        if (value.text !== undefined)
            return visitor.text(value.text);
        if (value.image !== undefined)
            return visitor.image(value.image);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(GuardrailContentBlock || (GuardrailContentBlock = {}));
export const GuardrailOutputScope = {
    FULL: "FULL",
    INTERVENTIONS: "INTERVENTIONS",
};
export const GuardrailContentSource = {
    INPUT: "INPUT",
    OUTPUT: "OUTPUT",
};
export const GuardrailAction = {
    GUARDRAIL_INTERVENED: "GUARDRAIL_INTERVENED",
    NONE: "NONE",
};
export const GuardrailContentPolicyAction = {
    BLOCKED: "BLOCKED",
    NONE: "NONE",
};
export const GuardrailContentFilterConfidence = {
    HIGH: "HIGH",
    LOW: "LOW",
    MEDIUM: "MEDIUM",
    NONE: "NONE",
};
export const GuardrailContentFilterStrength = {
    HIGH: "HIGH",
    LOW: "LOW",
    MEDIUM: "MEDIUM",
    NONE: "NONE",
};
export const GuardrailContentFilterType = {
    HATE: "HATE",
    INSULTS: "INSULTS",
    MISCONDUCT: "MISCONDUCT",
    PROMPT_ATTACK: "PROMPT_ATTACK",
    SEXUAL: "SEXUAL",
    VIOLENCE: "VIOLENCE",
};
export const GuardrailContextualGroundingPolicyAction = {
    BLOCKED: "BLOCKED",
    NONE: "NONE",
};
export const GuardrailContextualGroundingFilterType = {
    GROUNDING: "GROUNDING",
    RELEVANCE: "RELEVANCE",
};
export const GuardrailSensitiveInformationPolicyAction = {
    ANONYMIZED: "ANONYMIZED",
    BLOCKED: "BLOCKED",
    NONE: "NONE",
};
export const GuardrailPiiEntityType = {
    ADDRESS: "ADDRESS",
    AGE: "AGE",
    AWS_ACCESS_KEY: "AWS_ACCESS_KEY",
    AWS_SECRET_KEY: "AWS_SECRET_KEY",
    CA_HEALTH_NUMBER: "CA_HEALTH_NUMBER",
    CA_SOCIAL_INSURANCE_NUMBER: "CA_SOCIAL_INSURANCE_NUMBER",
    CREDIT_DEBIT_CARD_CVV: "CREDIT_DEBIT_CARD_CVV",
    CREDIT_DEBIT_CARD_EXPIRY: "CREDIT_DEBIT_CARD_EXPIRY",
    CREDIT_DEBIT_CARD_NUMBER: "CREDIT_DEBIT_CARD_NUMBER",
    DRIVER_ID: "DRIVER_ID",
    EMAIL: "EMAIL",
    INTERNATIONAL_BANK_ACCOUNT_NUMBER: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
    IP_ADDRESS: "IP_ADDRESS",
    LICENSE_PLATE: "LICENSE_PLATE",
    MAC_ADDRESS: "MAC_ADDRESS",
    NAME: "NAME",
    PASSWORD: "PASSWORD",
    PHONE: "PHONE",
    PIN: "PIN",
    SWIFT_CODE: "SWIFT_CODE",
    UK_NATIONAL_HEALTH_SERVICE_NUMBER: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
    UK_NATIONAL_INSURANCE_NUMBER: "UK_NATIONAL_INSURANCE_NUMBER",
    UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
    URL: "URL",
    USERNAME: "USERNAME",
    US_BANK_ACCOUNT_NUMBER: "US_BANK_ACCOUNT_NUMBER",
    US_BANK_ROUTING_NUMBER: "US_BANK_ROUTING_NUMBER",
    US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
    US_PASSPORT_NUMBER: "US_PASSPORT_NUMBER",
    US_SOCIAL_SECURITY_NUMBER: "US_SOCIAL_SECURITY_NUMBER",
    VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER",
};
export const GuardrailTopicPolicyAction = {
    BLOCKED: "BLOCKED",
    NONE: "NONE",
};
export const GuardrailTopicType = {
    DENY: "DENY",
};
export const GuardrailWordPolicyAction = {
    BLOCKED: "BLOCKED",
    NONE: "NONE",
};
export const GuardrailManagedWordType = {
    PROFANITY: "PROFANITY",
};
export const GuardrailTrace = {
    DISABLED: "disabled",
    ENABLED: "enabled",
    ENABLED_FULL: "enabled_full",
};
export const CachePointType = {
    DEFAULT: "default",
};
export const DocumentFormat = {
    CSV: "csv",
    DOC: "doc",
    DOCX: "docx",
    HTML: "html",
    MD: "md",
    PDF: "pdf",
    TXT: "txt",
    XLS: "xls",
    XLSX: "xlsx",
};
export var DocumentSource;
(function (DocumentSource) {
    DocumentSource.visit = (value, visitor) => {
        if (value.bytes !== undefined)
            return visitor.bytes(value.bytes);
        if (value.s3Location !== undefined)
            return visitor.s3Location(value.s3Location);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(DocumentSource || (DocumentSource = {}));
export const GuardrailConverseImageFormat = {
    JPEG: "jpeg",
    PNG: "png",
};
export var GuardrailConverseImageSource;
(function (GuardrailConverseImageSource) {
    GuardrailConverseImageSource.visit = (value, visitor) => {
        if (value.bytes !== undefined)
            return visitor.bytes(value.bytes);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(GuardrailConverseImageSource || (GuardrailConverseImageSource = {}));
export const GuardrailConverseContentQualifier = {
    GROUNDING_SOURCE: "grounding_source",
    GUARD_CONTENT: "guard_content",
    QUERY: "query",
};
export var GuardrailConverseContentBlock;
(function (GuardrailConverseContentBlock) {
    GuardrailConverseContentBlock.visit = (value, visitor) => {
        if (value.text !== undefined)
            return visitor.text(value.text);
        if (value.image !== undefined)
            return visitor.image(value.image);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(GuardrailConverseContentBlock || (GuardrailConverseContentBlock = {}));
export const ImageFormat = {
    GIF: "gif",
    JPEG: "jpeg",
    PNG: "png",
    WEBP: "webp",
};
export var ImageSource;
(function (ImageSource) {
    ImageSource.visit = (value, visitor) => {
        if (value.bytes !== undefined)
            return visitor.bytes(value.bytes);
        if (value.s3Location !== undefined)
            return visitor.s3Location(value.s3Location);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ImageSource || (ImageSource = {}));
export var ReasoningContentBlock;
(function (ReasoningContentBlock) {
    ReasoningContentBlock.visit = (value, visitor) => {
        if (value.reasoningText !== undefined)
            return visitor.reasoningText(value.reasoningText);
        if (value.redactedContent !== undefined)
            return visitor.redactedContent(value.redactedContent);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ReasoningContentBlock || (ReasoningContentBlock = {}));
export const VideoFormat = {
    FLV: "flv",
    MKV: "mkv",
    MOV: "mov",
    MP4: "mp4",
    MPEG: "mpeg",
    MPG: "mpg",
    THREE_GP: "three_gp",
    WEBM: "webm",
    WMV: "wmv",
};
export var VideoSource;
(function (VideoSource) {
    VideoSource.visit = (value, visitor) => {
        if (value.bytes !== undefined)
            return visitor.bytes(value.bytes);
        if (value.s3Location !== undefined)
            return visitor.s3Location(value.s3Location);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(VideoSource || (VideoSource = {}));
export var ToolResultContentBlock;
(function (ToolResultContentBlock) {
    ToolResultContentBlock.visit = (value, visitor) => {
        if (value.json !== undefined)
            return visitor.json(value.json);
        if (value.text !== undefined)
            return visitor.text(value.text);
        if (value.image !== undefined)
            return visitor.image(value.image);
        if (value.document !== undefined)
            return visitor.document(value.document);
        if (value.video !== undefined)
            return visitor.video(value.video);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ToolResultContentBlock || (ToolResultContentBlock = {}));
export const ToolResultStatus = {
    ERROR: "error",
    SUCCESS: "success",
};
export var ContentBlock;
(function (ContentBlock) {
    ContentBlock.visit = (value, visitor) => {
        if (value.text !== undefined)
            return visitor.text(value.text);
        if (value.image !== undefined)
            return visitor.image(value.image);
        if (value.document !== undefined)
            return visitor.document(value.document);
        if (value.video !== undefined)
            return visitor.video(value.video);
        if (value.toolUse !== undefined)
            return visitor.toolUse(value.toolUse);
        if (value.toolResult !== undefined)
            return visitor.toolResult(value.toolResult);
        if (value.guardContent !== undefined)
            return visitor.guardContent(value.guardContent);
        if (value.cachePoint !== undefined)
            return visitor.cachePoint(value.cachePoint);
        if (value.reasoningContent !== undefined)
            return visitor.reasoningContent(value.reasoningContent);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ContentBlock || (ContentBlock = {}));
export const ConversationRole = {
    ASSISTANT: "assistant",
    USER: "user",
};
export const PerformanceConfigLatency = {
    OPTIMIZED: "optimized",
    STANDARD: "standard",
};
export var PromptVariableValues;
(function (PromptVariableValues) {
    PromptVariableValues.visit = (value, visitor) => {
        if (value.text !== undefined)
            return visitor.text(value.text);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(PromptVariableValues || (PromptVariableValues = {}));
export var SystemContentBlock;
(function (SystemContentBlock) {
    SystemContentBlock.visit = (value, visitor) => {
        if (value.text !== undefined)
            return visitor.text(value.text);
        if (value.guardContent !== undefined)
            return visitor.guardContent(value.guardContent);
        if (value.cachePoint !== undefined)
            return visitor.cachePoint(value.cachePoint);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(SystemContentBlock || (SystemContentBlock = {}));
export var ToolChoice;
(function (ToolChoice) {
    ToolChoice.visit = (value, visitor) => {
        if (value.auto !== undefined)
            return visitor.auto(value.auto);
        if (value.any !== undefined)
            return visitor.any(value.any);
        if (value.tool !== undefined)
            return visitor.tool(value.tool);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ToolChoice || (ToolChoice = {}));
export var ToolInputSchema;
(function (ToolInputSchema) {
    ToolInputSchema.visit = (value, visitor) => {
        if (value.json !== undefined)
            return visitor.json(value.json);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ToolInputSchema || (ToolInputSchema = {}));
export var Tool;
(function (Tool) {
    Tool.visit = (value, visitor) => {
        if (value.toolSpec !== undefined)
            return visitor.toolSpec(value.toolSpec);
        if (value.cachePoint !== undefined)
            return visitor.cachePoint(value.cachePoint);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(Tool || (Tool = {}));
export var ConverseOutput;
(function (ConverseOutput) {
    ConverseOutput.visit = (value, visitor) => {
        if (value.message !== undefined)
            return visitor.message(value.message);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ConverseOutput || (ConverseOutput = {}));
export const StopReason = {
    CONTENT_FILTERED: "content_filtered",
    END_TURN: "end_turn",
    GUARDRAIL_INTERVENED: "guardrail_intervened",
    MAX_TOKENS: "max_tokens",
    STOP_SEQUENCE: "stop_sequence",
    TOOL_USE: "tool_use",
};
export class ModelErrorException extends __BaseException {
    name = "ModelErrorException";
    $fault = "client";
    originalStatusCode;
    resourceName;
    constructor(opts) {
        super({
            name: "ModelErrorException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ModelErrorException.prototype);
        this.originalStatusCode = opts.originalStatusCode;
        this.resourceName = opts.resourceName;
    }
}
export class ModelNotReadyException extends __BaseException {
    name = "ModelNotReadyException";
    $fault = "client";
    $retryable = {};
    constructor(opts) {
        super({
            name: "ModelNotReadyException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ModelNotReadyException.prototype);
    }
}
export class ModelTimeoutException extends __BaseException {
    name = "ModelTimeoutException";
    $fault = "client";
    constructor(opts) {
        super({
            name: "ModelTimeoutException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ModelTimeoutException.prototype);
    }
}
export const GuardrailStreamProcessingMode = {
    ASYNC: "async",
    SYNC: "sync",
};
export var ReasoningContentBlockDelta;
(function (ReasoningContentBlockDelta) {
    ReasoningContentBlockDelta.visit = (value, visitor) => {
        if (value.text !== undefined)
            return visitor.text(value.text);
        if (value.redactedContent !== undefined)
            return visitor.redactedContent(value.redactedContent);
        if (value.signature !== undefined)
            return visitor.signature(value.signature);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ReasoningContentBlockDelta || (ReasoningContentBlockDelta = {}));
export var ContentBlockDelta;
(function (ContentBlockDelta) {
    ContentBlockDelta.visit = (value, visitor) => {
        if (value.text !== undefined)
            return visitor.text(value.text);
        if (value.toolUse !== undefined)
            return visitor.toolUse(value.toolUse);
        if (value.reasoningContent !== undefined)
            return visitor.reasoningContent(value.reasoningContent);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ContentBlockDelta || (ContentBlockDelta = {}));
export var ContentBlockStart;
(function (ContentBlockStart) {
    ContentBlockStart.visit = (value, visitor) => {
        if (value.toolUse !== undefined)
            return visitor.toolUse(value.toolUse);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ContentBlockStart || (ContentBlockStart = {}));
export class ModelStreamErrorException extends __BaseException {
    name = "ModelStreamErrorException";
    $fault = "client";
    originalStatusCode;
    originalMessage;
    constructor(opts) {
        super({
            name: "ModelStreamErrorException",
            $fault: "client",
            ...opts,
        });
        Object.setPrototypeOf(this, ModelStreamErrorException.prototype);
        this.originalStatusCode = opts.originalStatusCode;
        this.originalMessage = opts.originalMessage;
    }
}
export var ConverseStreamOutput;
(function (ConverseStreamOutput) {
    ConverseStreamOutput.visit = (value, visitor) => {
        if (value.messageStart !== undefined)
            return visitor.messageStart(value.messageStart);
        if (value.contentBlockStart !== undefined)
            return visitor.contentBlockStart(value.contentBlockStart);
        if (value.contentBlockDelta !== undefined)
            return visitor.contentBlockDelta(value.contentBlockDelta);
        if (value.contentBlockStop !== undefined)
            return visitor.contentBlockStop(value.contentBlockStop);
        if (value.messageStop !== undefined)
            return visitor.messageStop(value.messageStop);
        if (value.metadata !== undefined)
            return visitor.metadata(value.metadata);
        if (value.internalServerException !== undefined)
            return visitor.internalServerException(value.internalServerException);
        if (value.modelStreamErrorException !== undefined)
            return visitor.modelStreamErrorException(value.modelStreamErrorException);
        if (value.validationException !== undefined)
            return visitor.validationException(value.validationException);
        if (value.throttlingException !== undefined)
            return visitor.throttlingException(value.throttlingException);
        if (value.serviceUnavailableException !== undefined)
            return visitor.serviceUnavailableException(value.serviceUnavailableException);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ConverseStreamOutput || (ConverseStreamOutput = {}));
export const Trace = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
    ENABLED_FULL: "ENABLED_FULL",
};
export var InvokeModelWithBidirectionalStreamInput;
(function (InvokeModelWithBidirectionalStreamInput) {
    InvokeModelWithBidirectionalStreamInput.visit = (value, visitor) => {
        if (value.chunk !== undefined)
            return visitor.chunk(value.chunk);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(InvokeModelWithBidirectionalStreamInput || (InvokeModelWithBidirectionalStreamInput = {}));
export var InvokeModelWithBidirectionalStreamOutput;
(function (InvokeModelWithBidirectionalStreamOutput) {
    InvokeModelWithBidirectionalStreamOutput.visit = (value, visitor) => {
        if (value.chunk !== undefined)
            return visitor.chunk(value.chunk);
        if (value.internalServerException !== undefined)
            return visitor.internalServerException(value.internalServerException);
        if (value.modelStreamErrorException !== undefined)
            return visitor.modelStreamErrorException(value.modelStreamErrorException);
        if (value.validationException !== undefined)
            return visitor.validationException(value.validationException);
        if (value.throttlingException !== undefined)
            return visitor.throttlingException(value.throttlingException);
        if (value.modelTimeoutException !== undefined)
            return visitor.modelTimeoutException(value.modelTimeoutException);
        if (value.serviceUnavailableException !== undefined)
            return visitor.serviceUnavailableException(value.serviceUnavailableException);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(InvokeModelWithBidirectionalStreamOutput || (InvokeModelWithBidirectionalStreamOutput = {}));
export var ResponseStream;
(function (ResponseStream) {
    ResponseStream.visit = (value, visitor) => {
        if (value.chunk !== undefined)
            return visitor.chunk(value.chunk);
        if (value.internalServerException !== undefined)
            return visitor.internalServerException(value.internalServerException);
        if (value.modelStreamErrorException !== undefined)
            return visitor.modelStreamErrorException(value.modelStreamErrorException);
        if (value.validationException !== undefined)
            return visitor.validationException(value.validationException);
        if (value.throttlingException !== undefined)
            return visitor.throttlingException(value.throttlingException);
        if (value.modelTimeoutException !== undefined)
            return visitor.modelTimeoutException(value.modelTimeoutException);
        if (value.serviceUnavailableException !== undefined)
            return visitor.serviceUnavailableException(value.serviceUnavailableException);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(ResponseStream || (ResponseStream = {}));
export const GetAsyncInvokeResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.failureMessage && { failureMessage: SENSITIVE_STRING }),
    ...(obj.outputDataConfig && { outputDataConfig: obj.outputDataConfig }),
});
export const AsyncInvokeSummaryFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.failureMessage && { failureMessage: SENSITIVE_STRING }),
    ...(obj.outputDataConfig && { outputDataConfig: obj.outputDataConfig }),
});
export const ListAsyncInvokesResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.asyncInvokeSummaries && {
        asyncInvokeSummaries: obj.asyncInvokeSummaries.map((item) => AsyncInvokeSummaryFilterSensitiveLog(item)),
    }),
});
export const StartAsyncInvokeRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.modelInput && { modelInput: SENSITIVE_STRING }),
    ...(obj.outputDataConfig && { outputDataConfig: obj.outputDataConfig }),
});
export const GuardrailImageSourceFilterSensitiveLog = (obj) => {
    if (obj.bytes !== undefined)
        return { bytes: obj.bytes };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const GuardrailImageBlockFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.source && { source: SENSITIVE_STRING }),
});
export const GuardrailContentBlockFilterSensitiveLog = (obj) => {
    if (obj.text !== undefined)
        return { text: obj.text };
    if (obj.image !== undefined)
        return { image: SENSITIVE_STRING };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const ApplyGuardrailRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.content && { content: obj.content.map((item) => GuardrailContentBlockFilterSensitiveLog(item)) }),
});
export const GuardrailConverseImageSourceFilterSensitiveLog = (obj) => {
    if (obj.bytes !== undefined)
        return { bytes: obj.bytes };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const GuardrailConverseImageBlockFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.source && { source: SENSITIVE_STRING }),
});
export const GuardrailConverseContentBlockFilterSensitiveLog = (obj) => {
    if (obj.text !== undefined)
        return { text: obj.text };
    if (obj.image !== undefined)
        return { image: SENSITIVE_STRING };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const ReasoningTextBlockFilterSensitiveLog = (obj) => ({
    ...obj,
});
export const ReasoningContentBlockFilterSensitiveLog = (obj) => {
    if (obj.reasoningText !== undefined)
        return { reasoningText: SENSITIVE_STRING };
    if (obj.redactedContent !== undefined)
        return { redactedContent: obj.redactedContent };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const ContentBlockFilterSensitiveLog = (obj) => {
    if (obj.text !== undefined)
        return { text: obj.text };
    if (obj.image !== undefined)
        return { image: obj.image };
    if (obj.document !== undefined)
        return { document: obj.document };
    if (obj.video !== undefined)
        return { video: obj.video };
    if (obj.toolUse !== undefined)
        return { toolUse: obj.toolUse };
    if (obj.toolResult !== undefined)
        return { toolResult: obj.toolResult };
    if (obj.guardContent !== undefined)
        return { guardContent: GuardrailConverseContentBlockFilterSensitiveLog(obj.guardContent) };
    if (obj.cachePoint !== undefined)
        return { cachePoint: obj.cachePoint };
    if (obj.reasoningContent !== undefined)
        return { reasoningContent: SENSITIVE_STRING };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const MessageFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.content && { content: obj.content.map((item) => ContentBlockFilterSensitiveLog(item)) }),
});
export const SystemContentBlockFilterSensitiveLog = (obj) => {
    if (obj.text !== undefined)
        return { text: obj.text };
    if (obj.guardContent !== undefined)
        return { guardContent: GuardrailConverseContentBlockFilterSensitiveLog(obj.guardContent) };
    if (obj.cachePoint !== undefined)
        return { cachePoint: obj.cachePoint };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const ConverseRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.messages && { messages: obj.messages.map((item) => MessageFilterSensitiveLog(item)) }),
    ...(obj.system && { system: obj.system.map((item) => SystemContentBlockFilterSensitiveLog(item)) }),
    ...(obj.toolConfig && { toolConfig: obj.toolConfig }),
    ...(obj.promptVariables && { promptVariables: SENSITIVE_STRING }),
    ...(obj.requestMetadata && { requestMetadata: SENSITIVE_STRING }),
});
export const ConverseOutputFilterSensitiveLog = (obj) => {
    if (obj.message !== undefined)
        return { message: MessageFilterSensitiveLog(obj.message) };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const ConverseResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.output && { output: ConverseOutputFilterSensitiveLog(obj.output) }),
});
export const ConverseStreamRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.messages && { messages: obj.messages.map((item) => MessageFilterSensitiveLog(item)) }),
    ...(obj.system && { system: obj.system.map((item) => SystemContentBlockFilterSensitiveLog(item)) }),
    ...(obj.toolConfig && { toolConfig: obj.toolConfig }),
    ...(obj.promptVariables && { promptVariables: SENSITIVE_STRING }),
    ...(obj.requestMetadata && { requestMetadata: SENSITIVE_STRING }),
});
export const ReasoningContentBlockDeltaFilterSensitiveLog = (obj) => {
    if (obj.text !== undefined)
        return { text: obj.text };
    if (obj.redactedContent !== undefined)
        return { redactedContent: obj.redactedContent };
    if (obj.signature !== undefined)
        return { signature: obj.signature };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const ContentBlockDeltaFilterSensitiveLog = (obj) => {
    if (obj.text !== undefined)
        return { text: obj.text };
    if (obj.toolUse !== undefined)
        return { toolUse: obj.toolUse };
    if (obj.reasoningContent !== undefined)
        return { reasoningContent: SENSITIVE_STRING };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const ContentBlockDeltaEventFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.delta && { delta: ContentBlockDeltaFilterSensitiveLog(obj.delta) }),
});
export const ConverseStreamOutputFilterSensitiveLog = (obj) => {
    if (obj.messageStart !== undefined)
        return { messageStart: obj.messageStart };
    if (obj.contentBlockStart !== undefined)
        return { contentBlockStart: obj.contentBlockStart };
    if (obj.contentBlockDelta !== undefined)
        return { contentBlockDelta: ContentBlockDeltaEventFilterSensitiveLog(obj.contentBlockDelta) };
    if (obj.contentBlockStop !== undefined)
        return { contentBlockStop: obj.contentBlockStop };
    if (obj.messageStop !== undefined)
        return { messageStop: obj.messageStop };
    if (obj.metadata !== undefined)
        return { metadata: obj.metadata };
    if (obj.internalServerException !== undefined)
        return { internalServerException: obj.internalServerException };
    if (obj.modelStreamErrorException !== undefined)
        return { modelStreamErrorException: obj.modelStreamErrorException };
    if (obj.validationException !== undefined)
        return { validationException: obj.validationException };
    if (obj.throttlingException !== undefined)
        return { throttlingException: obj.throttlingException };
    if (obj.serviceUnavailableException !== undefined)
        return { serviceUnavailableException: obj.serviceUnavailableException };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const ConverseStreamResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.stream && { stream: "STREAMING_CONTENT" }),
});
export const InvokeModelRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.body && { body: SENSITIVE_STRING }),
});
export const InvokeModelResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.body && { body: SENSITIVE_STRING }),
});
export const BidirectionalInputPayloadPartFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.bytes && { bytes: SENSITIVE_STRING }),
});
export const InvokeModelWithBidirectionalStreamInputFilterSensitiveLog = (obj) => {
    if (obj.chunk !== undefined)
        return { chunk: SENSITIVE_STRING };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.body && { body: "STREAMING_CONTENT" }),
});
export const BidirectionalOutputPayloadPartFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.bytes && { bytes: SENSITIVE_STRING }),
});
export const InvokeModelWithBidirectionalStreamOutputFilterSensitiveLog = (obj) => {
    if (obj.chunk !== undefined)
        return { chunk: SENSITIVE_STRING };
    if (obj.internalServerException !== undefined)
        return { internalServerException: obj.internalServerException };
    if (obj.modelStreamErrorException !== undefined)
        return { modelStreamErrorException: obj.modelStreamErrorException };
    if (obj.validationException !== undefined)
        return { validationException: obj.validationException };
    if (obj.throttlingException !== undefined)
        return { throttlingException: obj.throttlingException };
    if (obj.modelTimeoutException !== undefined)
        return { modelTimeoutException: obj.modelTimeoutException };
    if (obj.serviceUnavailableException !== undefined)
        return { serviceUnavailableException: obj.serviceUnavailableException };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.body && { body: "STREAMING_CONTENT" }),
});
export const InvokeModelWithResponseStreamRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.body && { body: SENSITIVE_STRING }),
});
export const PayloadPartFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.bytes && { bytes: SENSITIVE_STRING }),
});
export const ResponseStreamFilterSensitiveLog = (obj) => {
    if (obj.chunk !== undefined)
        return { chunk: SENSITIVE_STRING };
    if (obj.internalServerException !== undefined)
        return { internalServerException: obj.internalServerException };
    if (obj.modelStreamErrorException !== undefined)
        return { modelStreamErrorException: obj.modelStreamErrorException };
    if (obj.validationException !== undefined)
        return { validationException: obj.validationException };
    if (obj.throttlingException !== undefined)
        return { throttlingException: obj.throttlingException };
    if (obj.modelTimeoutException !== undefined)
        return { modelTimeoutException: obj.modelTimeoutException };
    if (obj.serviceUnavailableException !== undefined)
        return { serviceUnavailableException: obj.serviceUnavailableException };
    if (obj.$unknown !== undefined)
        return { [obj.$unknown[0]]: "UNKNOWN" };
};
export const InvokeModelWithResponseStreamResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.body && { body: "STREAMING_CONTENT" }),
});
