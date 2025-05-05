"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AccessDeniedException: () => AccessDeniedException,
  ApplyGuardrailCommand: () => ApplyGuardrailCommand,
  ApplyGuardrailRequestFilterSensitiveLog: () => ApplyGuardrailRequestFilterSensitiveLog,
  AsyncInvokeOutputDataConfig: () => AsyncInvokeOutputDataConfig,
  AsyncInvokeStatus: () => AsyncInvokeStatus,
  AsyncInvokeSummaryFilterSensitiveLog: () => AsyncInvokeSummaryFilterSensitiveLog,
  BedrockRuntime: () => BedrockRuntime,
  BedrockRuntimeClient: () => BedrockRuntimeClient,
  BedrockRuntimeServiceException: () => BedrockRuntimeServiceException,
  BidirectionalInputPayloadPartFilterSensitiveLog: () => BidirectionalInputPayloadPartFilterSensitiveLog,
  BidirectionalOutputPayloadPartFilterSensitiveLog: () => BidirectionalOutputPayloadPartFilterSensitiveLog,
  CachePointType: () => CachePointType,
  ConflictException: () => ConflictException,
  ContentBlock: () => ContentBlock,
  ContentBlockDelta: () => ContentBlockDelta,
  ContentBlockDeltaEventFilterSensitiveLog: () => ContentBlockDeltaEventFilterSensitiveLog,
  ContentBlockDeltaFilterSensitiveLog: () => ContentBlockDeltaFilterSensitiveLog,
  ContentBlockFilterSensitiveLog: () => ContentBlockFilterSensitiveLog,
  ContentBlockStart: () => ContentBlockStart,
  ConversationRole: () => ConversationRole,
  ConverseCommand: () => ConverseCommand,
  ConverseOutput: () => ConverseOutput,
  ConverseOutputFilterSensitiveLog: () => ConverseOutputFilterSensitiveLog,
  ConverseRequestFilterSensitiveLog: () => ConverseRequestFilterSensitiveLog,
  ConverseResponseFilterSensitiveLog: () => ConverseResponseFilterSensitiveLog,
  ConverseStreamCommand: () => ConverseStreamCommand,
  ConverseStreamOutput: () => ConverseStreamOutput,
  ConverseStreamOutputFilterSensitiveLog: () => ConverseStreamOutputFilterSensitiveLog,
  ConverseStreamRequestFilterSensitiveLog: () => ConverseStreamRequestFilterSensitiveLog,
  ConverseStreamResponseFilterSensitiveLog: () => ConverseStreamResponseFilterSensitiveLog,
  DocumentFormat: () => DocumentFormat,
  DocumentSource: () => DocumentSource,
  GetAsyncInvokeCommand: () => GetAsyncInvokeCommand,
  GetAsyncInvokeResponseFilterSensitiveLog: () => GetAsyncInvokeResponseFilterSensitiveLog,
  GuardrailAction: () => GuardrailAction,
  GuardrailContentBlock: () => GuardrailContentBlock,
  GuardrailContentBlockFilterSensitiveLog: () => GuardrailContentBlockFilterSensitiveLog,
  GuardrailContentFilterConfidence: () => GuardrailContentFilterConfidence,
  GuardrailContentFilterStrength: () => GuardrailContentFilterStrength,
  GuardrailContentFilterType: () => GuardrailContentFilterType,
  GuardrailContentPolicyAction: () => GuardrailContentPolicyAction,
  GuardrailContentQualifier: () => GuardrailContentQualifier,
  GuardrailContentSource: () => GuardrailContentSource,
  GuardrailContextualGroundingFilterType: () => GuardrailContextualGroundingFilterType,
  GuardrailContextualGroundingPolicyAction: () => GuardrailContextualGroundingPolicyAction,
  GuardrailConverseContentBlock: () => GuardrailConverseContentBlock,
  GuardrailConverseContentBlockFilterSensitiveLog: () => GuardrailConverseContentBlockFilterSensitiveLog,
  GuardrailConverseContentQualifier: () => GuardrailConverseContentQualifier,
  GuardrailConverseImageBlockFilterSensitiveLog: () => GuardrailConverseImageBlockFilterSensitiveLog,
  GuardrailConverseImageFormat: () => GuardrailConverseImageFormat,
  GuardrailConverseImageSource: () => GuardrailConverseImageSource,
  GuardrailConverseImageSourceFilterSensitiveLog: () => GuardrailConverseImageSourceFilterSensitiveLog,
  GuardrailImageBlockFilterSensitiveLog: () => GuardrailImageBlockFilterSensitiveLog,
  GuardrailImageFormat: () => GuardrailImageFormat,
  GuardrailImageSource: () => GuardrailImageSource,
  GuardrailImageSourceFilterSensitiveLog: () => GuardrailImageSourceFilterSensitiveLog,
  GuardrailManagedWordType: () => GuardrailManagedWordType,
  GuardrailOutputScope: () => GuardrailOutputScope,
  GuardrailPiiEntityType: () => GuardrailPiiEntityType,
  GuardrailSensitiveInformationPolicyAction: () => GuardrailSensitiveInformationPolicyAction,
  GuardrailStreamProcessingMode: () => GuardrailStreamProcessingMode,
  GuardrailTopicPolicyAction: () => GuardrailTopicPolicyAction,
  GuardrailTopicType: () => GuardrailTopicType,
  GuardrailTrace: () => GuardrailTrace,
  GuardrailWordPolicyAction: () => GuardrailWordPolicyAction,
  ImageFormat: () => ImageFormat,
  ImageSource: () => ImageSource,
  InternalServerException: () => InternalServerException,
  InvokeModelCommand: () => InvokeModelCommand,
  InvokeModelRequestFilterSensitiveLog: () => InvokeModelRequestFilterSensitiveLog,
  InvokeModelResponseFilterSensitiveLog: () => InvokeModelResponseFilterSensitiveLog,
  InvokeModelWithBidirectionalStreamCommand: () => InvokeModelWithBidirectionalStreamCommand,
  InvokeModelWithBidirectionalStreamInput: () => InvokeModelWithBidirectionalStreamInput,
  InvokeModelWithBidirectionalStreamInputFilterSensitiveLog: () => InvokeModelWithBidirectionalStreamInputFilterSensitiveLog,
  InvokeModelWithBidirectionalStreamOutput: () => InvokeModelWithBidirectionalStreamOutput,
  InvokeModelWithBidirectionalStreamOutputFilterSensitiveLog: () => InvokeModelWithBidirectionalStreamOutputFilterSensitiveLog,
  InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog: () => InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog,
  InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog: () => InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog,
  InvokeModelWithResponseStreamCommand: () => InvokeModelWithResponseStreamCommand,
  InvokeModelWithResponseStreamRequestFilterSensitiveLog: () => InvokeModelWithResponseStreamRequestFilterSensitiveLog,
  InvokeModelWithResponseStreamResponseFilterSensitiveLog: () => InvokeModelWithResponseStreamResponseFilterSensitiveLog,
  ListAsyncInvokesCommand: () => ListAsyncInvokesCommand,
  ListAsyncInvokesResponseFilterSensitiveLog: () => ListAsyncInvokesResponseFilterSensitiveLog,
  MessageFilterSensitiveLog: () => MessageFilterSensitiveLog,
  ModelErrorException: () => ModelErrorException,
  ModelNotReadyException: () => ModelNotReadyException,
  ModelStreamErrorException: () => ModelStreamErrorException,
  ModelTimeoutException: () => ModelTimeoutException,
  PayloadPartFilterSensitiveLog: () => PayloadPartFilterSensitiveLog,
  PerformanceConfigLatency: () => PerformanceConfigLatency,
  PromptVariableValues: () => PromptVariableValues,
  ReasoningContentBlock: () => ReasoningContentBlock,
  ReasoningContentBlockDelta: () => ReasoningContentBlockDelta,
  ReasoningContentBlockDeltaFilterSensitiveLog: () => ReasoningContentBlockDeltaFilterSensitiveLog,
  ReasoningContentBlockFilterSensitiveLog: () => ReasoningContentBlockFilterSensitiveLog,
  ReasoningTextBlockFilterSensitiveLog: () => ReasoningTextBlockFilterSensitiveLog,
  ResourceNotFoundException: () => ResourceNotFoundException,
  ResponseStream: () => ResponseStream,
  ResponseStreamFilterSensitiveLog: () => ResponseStreamFilterSensitiveLog,
  ServiceQuotaExceededException: () => ServiceQuotaExceededException,
  ServiceUnavailableException: () => ServiceUnavailableException,
  SortAsyncInvocationBy: () => SortAsyncInvocationBy,
  SortOrder: () => SortOrder,
  StartAsyncInvokeCommand: () => StartAsyncInvokeCommand,
  StartAsyncInvokeRequestFilterSensitiveLog: () => StartAsyncInvokeRequestFilterSensitiveLog,
  StopReason: () => StopReason,
  SystemContentBlock: () => SystemContentBlock,
  SystemContentBlockFilterSensitiveLog: () => SystemContentBlockFilterSensitiveLog,
  ThrottlingException: () => ThrottlingException,
  Tool: () => Tool,
  ToolChoice: () => ToolChoice,
  ToolInputSchema: () => ToolInputSchema,
  ToolResultContentBlock: () => ToolResultContentBlock,
  ToolResultStatus: () => ToolResultStatus,
  Trace: () => Trace,
  ValidationException: () => ValidationException,
  VideoFormat: () => VideoFormat,
  VideoSource: () => VideoSource,
  __Client: () => import_smithy_client.Client,
  paginateListAsyncInvokes: () => paginateListAsyncInvokes
});
module.exports = __toCommonJS(index_exports);

// src/BedrockRuntimeClient.ts
var import_middleware_eventstream = require("@aws-sdk/middleware-eventstream");
var import_middleware_host_header = require("@aws-sdk/middleware-host-header");
var import_middleware_logger = require("@aws-sdk/middleware-logger");
var import_middleware_recursion_detection = require("@aws-sdk/middleware-recursion-detection");
var import_middleware_user_agent = require("@aws-sdk/middleware-user-agent");
var import_config_resolver = require("@smithy/config-resolver");
var import_core = require("@smithy/core");
var import_eventstream_serde_config_resolver = require("@smithy/eventstream-serde-config-resolver");
var import_middleware_content_length = require("@smithy/middleware-content-length");
var import_middleware_endpoint = require("@smithy/middleware-endpoint");
var import_middleware_retry = require("@smithy/middleware-retry");

var import_httpAuthSchemeProvider = require("./auth/httpAuthSchemeProvider");

// src/endpoint/EndpointParameters.ts
var resolveClientEndpointParameters = /* @__PURE__ */ __name((options) => {
  return Object.assign(options, {
    useDualstackEndpoint: options.useDualstackEndpoint ?? false,
    useFipsEndpoint: options.useFipsEndpoint ?? false,
    defaultSigningName: "bedrock"
  });
}, "resolveClientEndpointParameters");
var commonParams = {
  UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
  Endpoint: { type: "builtInParams", name: "endpoint" },
  Region: { type: "builtInParams", name: "region" },
  UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" }
};

// src/BedrockRuntimeClient.ts
var import_runtimeConfig = require("././runtimeConfig");

// src/runtimeExtensions.ts
var import_region_config_resolver = require("@aws-sdk/region-config-resolver");
var import_protocol_http = require("@smithy/protocol-http");
var import_smithy_client = require("@smithy/smithy-client");

// src/auth/httpAuthExtensionConfiguration.ts
var getHttpAuthExtensionConfiguration = /* @__PURE__ */ __name((runtimeConfig) => {
  const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
  let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
  let _credentials = runtimeConfig.credentials;
  return {
    setHttpAuthScheme(httpAuthScheme) {
      const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
      if (index === -1) {
        _httpAuthSchemes.push(httpAuthScheme);
      } else {
        _httpAuthSchemes.splice(index, 1, httpAuthScheme);
      }
    },
    httpAuthSchemes() {
      return _httpAuthSchemes;
    },
    setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
      _httpAuthSchemeProvider = httpAuthSchemeProvider;
    },
    httpAuthSchemeProvider() {
      return _httpAuthSchemeProvider;
    },
    setCredentials(credentials) {
      _credentials = credentials;
    },
    credentials() {
      return _credentials;
    }
  };
}, "getHttpAuthExtensionConfiguration");
var resolveHttpAuthRuntimeConfig = /* @__PURE__ */ __name((config) => {
  return {
    httpAuthSchemes: config.httpAuthSchemes(),
    httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
    credentials: config.credentials()
  };
}, "resolveHttpAuthRuntimeConfig");

// src/runtimeExtensions.ts
var resolveRuntimeExtensions = /* @__PURE__ */ __name((runtimeConfig, extensions) => {
  const extensionConfiguration = Object.assign(
    (0, import_region_config_resolver.getAwsRegionExtensionConfiguration)(runtimeConfig),
    (0, import_smithy_client.getDefaultExtensionConfiguration)(runtimeConfig),
    (0, import_protocol_http.getHttpHandlerExtensionConfiguration)(runtimeConfig),
    getHttpAuthExtensionConfiguration(runtimeConfig)
  );
  extensions.forEach((extension) => extension.configure(extensionConfiguration));
  return Object.assign(
    runtimeConfig,
    (0, import_region_config_resolver.resolveAwsRegionExtensionConfiguration)(extensionConfiguration),
    (0, import_smithy_client.resolveDefaultRuntimeConfig)(extensionConfiguration),
    (0, import_protocol_http.resolveHttpHandlerRuntimeConfig)(extensionConfiguration),
    resolveHttpAuthRuntimeConfig(extensionConfiguration)
  );
}, "resolveRuntimeExtensions");

// src/BedrockRuntimeClient.ts
var BedrockRuntimeClient = class extends import_smithy_client.Client {
  static {
    __name(this, "BedrockRuntimeClient");
  }
  /**
   * The resolved configuration of BedrockRuntimeClient class. This is resolved and normalized from the {@link BedrockRuntimeClientConfig | constructor configuration interface}.
   */
  config;
  constructor(...[configuration]) {
    const _config_0 = (0, import_runtimeConfig.getRuntimeConfig)(configuration || {});
    super(_config_0);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = (0, import_middleware_user_agent.resolveUserAgentConfig)(_config_1);
    const _config_3 = (0, import_middleware_retry.resolveRetryConfig)(_config_2);
    const _config_4 = (0, import_config_resolver.resolveRegionConfig)(_config_3);
    const _config_5 = (0, import_middleware_host_header.resolveHostHeaderConfig)(_config_4);
    const _config_6 = (0, import_middleware_endpoint.resolveEndpointConfig)(_config_5);
    const _config_7 = (0, import_eventstream_serde_config_resolver.resolveEventStreamSerdeConfig)(_config_6);
    const _config_8 = (0, import_httpAuthSchemeProvider.resolveHttpAuthSchemeConfig)(_config_7);
    const _config_9 = (0, import_middleware_eventstream.resolveEventStreamConfig)(_config_8);
    const _config_10 = resolveRuntimeExtensions(_config_9, configuration?.extensions || []);
    this.config = _config_10;
    this.middlewareStack.use((0, import_middleware_user_agent.getUserAgentPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_retry.getRetryPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_content_length.getContentLengthPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_host_header.getHostHeaderPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_logger.getLoggerPlugin)(this.config));
    this.middlewareStack.use((0, import_middleware_recursion_detection.getRecursionDetectionPlugin)(this.config));
    this.middlewareStack.use(
      (0, import_core.getHttpAuthSchemeEndpointRuleSetPlugin)(this.config, {
        httpAuthSchemeParametersProvider: import_httpAuthSchemeProvider.defaultBedrockRuntimeHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: /* @__PURE__ */ __name(async (config) => new import_core.DefaultIdentityProviderConfig({
          "aws.auth#sigv4": config.credentials
        }), "identityProviderConfigProvider")
      })
    );
    this.middlewareStack.use((0, import_core.getHttpSigningPlugin)(this.config));
  }
  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy() {
    super.destroy();
  }
};

// src/BedrockRuntime.ts


// src/commands/ApplyGuardrailCommand.ts

var import_middleware_serde = require("@smithy/middleware-serde");


// src/models/models_0.ts


// src/models/BedrockRuntimeServiceException.ts

var BedrockRuntimeServiceException = class _BedrockRuntimeServiceException extends import_smithy_client.ServiceException {
  static {
    __name(this, "BedrockRuntimeServiceException");
  }
  /**
   * @internal
   */
  constructor(options) {
    super(options);
    Object.setPrototypeOf(this, _BedrockRuntimeServiceException.prototype);
  }
};

// src/models/models_0.ts
var AccessDeniedException = class _AccessDeniedException extends BedrockRuntimeServiceException {
  static {
    __name(this, "AccessDeniedException");
  }
  name = "AccessDeniedException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _AccessDeniedException.prototype);
  }
};
var AsyncInvokeOutputDataConfig;
((AsyncInvokeOutputDataConfig3) => {
  AsyncInvokeOutputDataConfig3.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.s3OutputDataConfig !== void 0) return visitor.s3OutputDataConfig(value.s3OutputDataConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(AsyncInvokeOutputDataConfig || (AsyncInvokeOutputDataConfig = {}));
var AsyncInvokeStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress"
};
var InternalServerException = class _InternalServerException extends BedrockRuntimeServiceException {
  static {
    __name(this, "InternalServerException");
  }
  name = "InternalServerException";
  $fault = "server";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts
    });
    Object.setPrototypeOf(this, _InternalServerException.prototype);
  }
};
var ThrottlingException = class _ThrottlingException extends BedrockRuntimeServiceException {
  static {
    __name(this, "ThrottlingException");
  }
  name = "ThrottlingException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ThrottlingException.prototype);
  }
};
var ValidationException = class _ValidationException extends BedrockRuntimeServiceException {
  static {
    __name(this, "ValidationException");
  }
  name = "ValidationException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ValidationException.prototype);
  }
};
var SortAsyncInvocationBy = {
  SUBMISSION_TIME: "SubmissionTime"
};
var SortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending"
};
var ConflictException = class _ConflictException extends BedrockRuntimeServiceException {
  static {
    __name(this, "ConflictException");
  }
  name = "ConflictException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ConflictException.prototype);
  }
};
var ResourceNotFoundException = class _ResourceNotFoundException extends BedrockRuntimeServiceException {
  static {
    __name(this, "ResourceNotFoundException");
  }
  name = "ResourceNotFoundException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ResourceNotFoundException.prototype);
  }
};
var ServiceQuotaExceededException = class _ServiceQuotaExceededException extends BedrockRuntimeServiceException {
  static {
    __name(this, "ServiceQuotaExceededException");
  }
  name = "ServiceQuotaExceededException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ServiceQuotaExceededException.prototype);
  }
};
var ServiceUnavailableException = class _ServiceUnavailableException extends BedrockRuntimeServiceException {
  static {
    __name(this, "ServiceUnavailableException");
  }
  name = "ServiceUnavailableException";
  $fault = "server";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts
    });
    Object.setPrototypeOf(this, _ServiceUnavailableException.prototype);
  }
};
var GuardrailImageFormat = {
  JPEG: "jpeg",
  PNG: "png"
};
var GuardrailImageSource;
((GuardrailImageSource2) => {
  GuardrailImageSource2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.bytes !== void 0) return visitor.bytes(value.bytes);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(GuardrailImageSource || (GuardrailImageSource = {}));
var GuardrailContentQualifier = {
  GROUNDING_SOURCE: "grounding_source",
  GUARD_CONTENT: "guard_content",
  QUERY: "query"
};
var GuardrailContentBlock;
((GuardrailContentBlock2) => {
  GuardrailContentBlock2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.text !== void 0) return visitor.text(value.text);
    if (value.image !== void 0) return visitor.image(value.image);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(GuardrailContentBlock || (GuardrailContentBlock = {}));
var GuardrailOutputScope = {
  FULL: "FULL",
  INTERVENTIONS: "INTERVENTIONS"
};
var GuardrailContentSource = {
  INPUT: "INPUT",
  OUTPUT: "OUTPUT"
};
var GuardrailAction = {
  GUARDRAIL_INTERVENED: "GUARDRAIL_INTERVENED",
  NONE: "NONE"
};
var GuardrailContentPolicyAction = {
  BLOCKED: "BLOCKED",
  NONE: "NONE"
};
var GuardrailContentFilterConfidence = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE"
};
var GuardrailContentFilterStrength = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NONE: "NONE"
};
var GuardrailContentFilterType = {
  HATE: "HATE",
  INSULTS: "INSULTS",
  MISCONDUCT: "MISCONDUCT",
  PROMPT_ATTACK: "PROMPT_ATTACK",
  SEXUAL: "SEXUAL",
  VIOLENCE: "VIOLENCE"
};
var GuardrailContextualGroundingPolicyAction = {
  BLOCKED: "BLOCKED",
  NONE: "NONE"
};
var GuardrailContextualGroundingFilterType = {
  GROUNDING: "GROUNDING",
  RELEVANCE: "RELEVANCE"
};
var GuardrailSensitiveInformationPolicyAction = {
  ANONYMIZED: "ANONYMIZED",
  BLOCKED: "BLOCKED",
  NONE: "NONE"
};
var GuardrailPiiEntityType = {
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
  VEHICLE_IDENTIFICATION_NUMBER: "VEHICLE_IDENTIFICATION_NUMBER"
};
var GuardrailTopicPolicyAction = {
  BLOCKED: "BLOCKED",
  NONE: "NONE"
};
var GuardrailTopicType = {
  DENY: "DENY"
};
var GuardrailWordPolicyAction = {
  BLOCKED: "BLOCKED",
  NONE: "NONE"
};
var GuardrailManagedWordType = {
  PROFANITY: "PROFANITY"
};
var GuardrailTrace = {
  DISABLED: "disabled",
  ENABLED: "enabled",
  ENABLED_FULL: "enabled_full"
};
var CachePointType = {
  DEFAULT: "default"
};
var DocumentFormat = {
  CSV: "csv",
  DOC: "doc",
  DOCX: "docx",
  HTML: "html",
  MD: "md",
  PDF: "pdf",
  TXT: "txt",
  XLS: "xls",
  XLSX: "xlsx"
};
var DocumentSource;
((DocumentSource2) => {
  DocumentSource2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.bytes !== void 0) return visitor.bytes(value.bytes);
    if (value.s3Location !== void 0) return visitor.s3Location(value.s3Location);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(DocumentSource || (DocumentSource = {}));
var GuardrailConverseImageFormat = {
  JPEG: "jpeg",
  PNG: "png"
};
var GuardrailConverseImageSource;
((GuardrailConverseImageSource2) => {
  GuardrailConverseImageSource2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.bytes !== void 0) return visitor.bytes(value.bytes);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(GuardrailConverseImageSource || (GuardrailConverseImageSource = {}));
var GuardrailConverseContentQualifier = {
  GROUNDING_SOURCE: "grounding_source",
  GUARD_CONTENT: "guard_content",
  QUERY: "query"
};
var GuardrailConverseContentBlock;
((GuardrailConverseContentBlock2) => {
  GuardrailConverseContentBlock2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.text !== void 0) return visitor.text(value.text);
    if (value.image !== void 0) return visitor.image(value.image);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(GuardrailConverseContentBlock || (GuardrailConverseContentBlock = {}));
var ImageFormat = {
  GIF: "gif",
  JPEG: "jpeg",
  PNG: "png",
  WEBP: "webp"
};
var ImageSource;
((ImageSource2) => {
  ImageSource2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.bytes !== void 0) return visitor.bytes(value.bytes);
    if (value.s3Location !== void 0) return visitor.s3Location(value.s3Location);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(ImageSource || (ImageSource = {}));
var ReasoningContentBlock;
((ReasoningContentBlock2) => {
  ReasoningContentBlock2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.reasoningText !== void 0) return visitor.reasoningText(value.reasoningText);
    if (value.redactedContent !== void 0) return visitor.redactedContent(value.redactedContent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(ReasoningContentBlock || (ReasoningContentBlock = {}));
var VideoFormat = {
  FLV: "flv",
  MKV: "mkv",
  MOV: "mov",
  MP4: "mp4",
  MPEG: "mpeg",
  MPG: "mpg",
  THREE_GP: "three_gp",
  WEBM: "webm",
  WMV: "wmv"
};
var VideoSource;
((VideoSource2) => {
  VideoSource2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.bytes !== void 0) return visitor.bytes(value.bytes);
    if (value.s3Location !== void 0) return visitor.s3Location(value.s3Location);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(VideoSource || (VideoSource = {}));
var ToolResultContentBlock;
((ToolResultContentBlock2) => {
  ToolResultContentBlock2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.json !== void 0) return visitor.json(value.json);
    if (value.text !== void 0) return visitor.text(value.text);
    if (value.image !== void 0) return visitor.image(value.image);
    if (value.document !== void 0) return visitor.document(value.document);
    if (value.video !== void 0) return visitor.video(value.video);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(ToolResultContentBlock || (ToolResultContentBlock = {}));
var ToolResultStatus = {
  ERROR: "error",
  SUCCESS: "success"
};
var ContentBlock;
((ContentBlock2) => {
  ContentBlock2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.text !== void 0) return visitor.text(value.text);
    if (value.image !== void 0) return visitor.image(value.image);
    if (value.document !== void 0) return visitor.document(value.document);
    if (value.video !== void 0) return visitor.video(value.video);
    if (value.toolUse !== void 0) return visitor.toolUse(value.toolUse);
    if (value.toolResult !== void 0) return visitor.toolResult(value.toolResult);
    if (value.guardContent !== void 0) return visitor.guardContent(value.guardContent);
    if (value.cachePoint !== void 0) return visitor.cachePoint(value.cachePoint);
    if (value.reasoningContent !== void 0) return visitor.reasoningContent(value.reasoningContent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(ContentBlock || (ContentBlock = {}));
var ConversationRole = {
  ASSISTANT: "assistant",
  USER: "user"
};
var PerformanceConfigLatency = {
  OPTIMIZED: "optimized",
  STANDARD: "standard"
};
var PromptVariableValues;
((PromptVariableValues3) => {
  PromptVariableValues3.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.text !== void 0) return visitor.text(value.text);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(PromptVariableValues || (PromptVariableValues = {}));
var SystemContentBlock;
((SystemContentBlock2) => {
  SystemContentBlock2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.text !== void 0) return visitor.text(value.text);
    if (value.guardContent !== void 0) return visitor.guardContent(value.guardContent);
    if (value.cachePoint !== void 0) return visitor.cachePoint(value.cachePoint);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(SystemContentBlock || (SystemContentBlock = {}));
var ToolChoice;
((ToolChoice3) => {
  ToolChoice3.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.auto !== void 0) return visitor.auto(value.auto);
    if (value.any !== void 0) return visitor.any(value.any);
    if (value.tool !== void 0) return visitor.tool(value.tool);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(ToolChoice || (ToolChoice = {}));
var ToolInputSchema;
((ToolInputSchema2) => {
  ToolInputSchema2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.json !== void 0) return visitor.json(value.json);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(ToolInputSchema || (ToolInputSchema = {}));
var Tool;
((Tool2) => {
  Tool2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.toolSpec !== void 0) return visitor.toolSpec(value.toolSpec);
    if (value.cachePoint !== void 0) return visitor.cachePoint(value.cachePoint);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(Tool || (Tool = {}));
var ConverseOutput;
((ConverseOutput3) => {
  ConverseOutput3.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.message !== void 0) return visitor.message(value.message);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(ConverseOutput || (ConverseOutput = {}));
var StopReason = {
  CONTENT_FILTERED: "content_filtered",
  END_TURN: "end_turn",
  GUARDRAIL_INTERVENED: "guardrail_intervened",
  MAX_TOKENS: "max_tokens",
  STOP_SEQUENCE: "stop_sequence",
  TOOL_USE: "tool_use"
};
var ModelErrorException = class _ModelErrorException extends BedrockRuntimeServiceException {
  static {
    __name(this, "ModelErrorException");
  }
  name = "ModelErrorException";
  $fault = "client";
  /**
   * <p>The original status code.</p>
   * @public
   */
  originalStatusCode;
  /**
   * <p>The resource name.</p>
   * @public
   */
  resourceName;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ModelErrorException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ModelErrorException.prototype);
    this.originalStatusCode = opts.originalStatusCode;
    this.resourceName = opts.resourceName;
  }
};
var ModelNotReadyException = class _ModelNotReadyException extends BedrockRuntimeServiceException {
  static {
    __name(this, "ModelNotReadyException");
  }
  name = "ModelNotReadyException";
  $fault = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ModelNotReadyException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ModelNotReadyException.prototype);
  }
};
var ModelTimeoutException = class _ModelTimeoutException extends BedrockRuntimeServiceException {
  static {
    __name(this, "ModelTimeoutException");
  }
  name = "ModelTimeoutException";
  $fault = "client";
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ModelTimeoutException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ModelTimeoutException.prototype);
  }
};
var GuardrailStreamProcessingMode = {
  ASYNC: "async",
  SYNC: "sync"
};
var ReasoningContentBlockDelta;
((ReasoningContentBlockDelta3) => {
  ReasoningContentBlockDelta3.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.text !== void 0) return visitor.text(value.text);
    if (value.redactedContent !== void 0) return visitor.redactedContent(value.redactedContent);
    if (value.signature !== void 0) return visitor.signature(value.signature);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(ReasoningContentBlockDelta || (ReasoningContentBlockDelta = {}));
var ContentBlockDelta;
((ContentBlockDelta3) => {
  ContentBlockDelta3.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.text !== void 0) return visitor.text(value.text);
    if (value.toolUse !== void 0) return visitor.toolUse(value.toolUse);
    if (value.reasoningContent !== void 0) return visitor.reasoningContent(value.reasoningContent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(ContentBlockDelta || (ContentBlockDelta = {}));
var ContentBlockStart;
((ContentBlockStart2) => {
  ContentBlockStart2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.toolUse !== void 0) return visitor.toolUse(value.toolUse);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(ContentBlockStart || (ContentBlockStart = {}));
var ModelStreamErrorException = class _ModelStreamErrorException extends BedrockRuntimeServiceException {
  static {
    __name(this, "ModelStreamErrorException");
  }
  name = "ModelStreamErrorException";
  $fault = "client";
  /**
   * <p>The original status code.</p>
   * @public
   */
  originalStatusCode;
  /**
   * <p>The original message.</p>
   * @public
   */
  originalMessage;
  /**
   * @internal
   */
  constructor(opts) {
    super({
      name: "ModelStreamErrorException",
      $fault: "client",
      ...opts
    });
    Object.setPrototypeOf(this, _ModelStreamErrorException.prototype);
    this.originalStatusCode = opts.originalStatusCode;
    this.originalMessage = opts.originalMessage;
  }
};
var ConverseStreamOutput;
((ConverseStreamOutput3) => {
  ConverseStreamOutput3.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.messageStart !== void 0) return visitor.messageStart(value.messageStart);
    if (value.contentBlockStart !== void 0) return visitor.contentBlockStart(value.contentBlockStart);
    if (value.contentBlockDelta !== void 0) return visitor.contentBlockDelta(value.contentBlockDelta);
    if (value.contentBlockStop !== void 0) return visitor.contentBlockStop(value.contentBlockStop);
    if (value.messageStop !== void 0) return visitor.messageStop(value.messageStop);
    if (value.metadata !== void 0) return visitor.metadata(value.metadata);
    if (value.internalServerException !== void 0)
      return visitor.internalServerException(value.internalServerException);
    if (value.modelStreamErrorException !== void 0)
      return visitor.modelStreamErrorException(value.modelStreamErrorException);
    if (value.validationException !== void 0) return visitor.validationException(value.validationException);
    if (value.throttlingException !== void 0) return visitor.throttlingException(value.throttlingException);
    if (value.serviceUnavailableException !== void 0)
      return visitor.serviceUnavailableException(value.serviceUnavailableException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(ConverseStreamOutput || (ConverseStreamOutput = {}));
var Trace = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENABLED_FULL: "ENABLED_FULL"
};
var InvokeModelWithBidirectionalStreamInput;
((InvokeModelWithBidirectionalStreamInput2) => {
  InvokeModelWithBidirectionalStreamInput2.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.chunk !== void 0) return visitor.chunk(value.chunk);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(InvokeModelWithBidirectionalStreamInput || (InvokeModelWithBidirectionalStreamInput = {}));
var InvokeModelWithBidirectionalStreamOutput;
((InvokeModelWithBidirectionalStreamOutput3) => {
  InvokeModelWithBidirectionalStreamOutput3.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.chunk !== void 0) return visitor.chunk(value.chunk);
    if (value.internalServerException !== void 0)
      return visitor.internalServerException(value.internalServerException);
    if (value.modelStreamErrorException !== void 0)
      return visitor.modelStreamErrorException(value.modelStreamErrorException);
    if (value.validationException !== void 0) return visitor.validationException(value.validationException);
    if (value.throttlingException !== void 0) return visitor.throttlingException(value.throttlingException);
    if (value.modelTimeoutException !== void 0) return visitor.modelTimeoutException(value.modelTimeoutException);
    if (value.serviceUnavailableException !== void 0)
      return visitor.serviceUnavailableException(value.serviceUnavailableException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(InvokeModelWithBidirectionalStreamOutput || (InvokeModelWithBidirectionalStreamOutput = {}));
var ResponseStream;
((ResponseStream3) => {
  ResponseStream3.visit = /* @__PURE__ */ __name((value, visitor) => {
    if (value.chunk !== void 0) return visitor.chunk(value.chunk);
    if (value.internalServerException !== void 0)
      return visitor.internalServerException(value.internalServerException);
    if (value.modelStreamErrorException !== void 0)
      return visitor.modelStreamErrorException(value.modelStreamErrorException);
    if (value.validationException !== void 0) return visitor.validationException(value.validationException);
    if (value.throttlingException !== void 0) return visitor.throttlingException(value.throttlingException);
    if (value.modelTimeoutException !== void 0) return visitor.modelTimeoutException(value.modelTimeoutException);
    if (value.serviceUnavailableException !== void 0)
      return visitor.serviceUnavailableException(value.serviceUnavailableException);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }, "visit");
})(ResponseStream || (ResponseStream = {}));
var GetAsyncInvokeResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.failureMessage && { failureMessage: import_smithy_client.SENSITIVE_STRING },
  ...obj.outputDataConfig && { outputDataConfig: obj.outputDataConfig }
}), "GetAsyncInvokeResponseFilterSensitiveLog");
var AsyncInvokeSummaryFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.failureMessage && { failureMessage: import_smithy_client.SENSITIVE_STRING },
  ...obj.outputDataConfig && { outputDataConfig: obj.outputDataConfig }
}), "AsyncInvokeSummaryFilterSensitiveLog");
var ListAsyncInvokesResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.asyncInvokeSummaries && {
    asyncInvokeSummaries: obj.asyncInvokeSummaries.map((item) => AsyncInvokeSummaryFilterSensitiveLog(item))
  }
}), "ListAsyncInvokesResponseFilterSensitiveLog");
var StartAsyncInvokeRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.modelInput && { modelInput: import_smithy_client.SENSITIVE_STRING },
  ...obj.outputDataConfig && { outputDataConfig: obj.outputDataConfig }
}), "StartAsyncInvokeRequestFilterSensitiveLog");
var GuardrailImageSourceFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.bytes !== void 0) return { bytes: obj.bytes };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "GuardrailImageSourceFilterSensitiveLog");
var GuardrailImageBlockFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.source && { source: import_smithy_client.SENSITIVE_STRING }
}), "GuardrailImageBlockFilterSensitiveLog");
var GuardrailContentBlockFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.text !== void 0) return { text: obj.text };
  if (obj.image !== void 0) return { image: import_smithy_client.SENSITIVE_STRING };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "GuardrailContentBlockFilterSensitiveLog");
var ApplyGuardrailRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.content && { content: obj.content.map((item) => GuardrailContentBlockFilterSensitiveLog(item)) }
}), "ApplyGuardrailRequestFilterSensitiveLog");
var GuardrailConverseImageSourceFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.bytes !== void 0) return { bytes: obj.bytes };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "GuardrailConverseImageSourceFilterSensitiveLog");
var GuardrailConverseImageBlockFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.source && { source: import_smithy_client.SENSITIVE_STRING }
}), "GuardrailConverseImageBlockFilterSensitiveLog");
var GuardrailConverseContentBlockFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.text !== void 0) return { text: obj.text };
  if (obj.image !== void 0) return { image: import_smithy_client.SENSITIVE_STRING };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "GuardrailConverseContentBlockFilterSensitiveLog");
var ReasoningTextBlockFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj
}), "ReasoningTextBlockFilterSensitiveLog");
var ReasoningContentBlockFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.reasoningText !== void 0) return { reasoningText: import_smithy_client.SENSITIVE_STRING };
  if (obj.redactedContent !== void 0) return { redactedContent: obj.redactedContent };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "ReasoningContentBlockFilterSensitiveLog");
var ContentBlockFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.text !== void 0) return { text: obj.text };
  if (obj.image !== void 0) return { image: obj.image };
  if (obj.document !== void 0) return { document: obj.document };
  if (obj.video !== void 0) return { video: obj.video };
  if (obj.toolUse !== void 0) return { toolUse: obj.toolUse };
  if (obj.toolResult !== void 0) return { toolResult: obj.toolResult };
  if (obj.guardContent !== void 0)
    return { guardContent: GuardrailConverseContentBlockFilterSensitiveLog(obj.guardContent) };
  if (obj.cachePoint !== void 0) return { cachePoint: obj.cachePoint };
  if (obj.reasoningContent !== void 0) return { reasoningContent: import_smithy_client.SENSITIVE_STRING };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "ContentBlockFilterSensitiveLog");
var MessageFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.content && { content: obj.content.map((item) => ContentBlockFilterSensitiveLog(item)) }
}), "MessageFilterSensitiveLog");
var SystemContentBlockFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.text !== void 0) return { text: obj.text };
  if (obj.guardContent !== void 0)
    return { guardContent: GuardrailConverseContentBlockFilterSensitiveLog(obj.guardContent) };
  if (obj.cachePoint !== void 0) return { cachePoint: obj.cachePoint };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "SystemContentBlockFilterSensitiveLog");
var ConverseRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.messages && { messages: obj.messages.map((item) => MessageFilterSensitiveLog(item)) },
  ...obj.system && { system: obj.system.map((item) => SystemContentBlockFilterSensitiveLog(item)) },
  ...obj.toolConfig && { toolConfig: obj.toolConfig },
  ...obj.promptVariables && { promptVariables: import_smithy_client.SENSITIVE_STRING },
  ...obj.requestMetadata && { requestMetadata: import_smithy_client.SENSITIVE_STRING }
}), "ConverseRequestFilterSensitiveLog");
var ConverseOutputFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.message !== void 0) return { message: MessageFilterSensitiveLog(obj.message) };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "ConverseOutputFilterSensitiveLog");
var ConverseResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.output && { output: ConverseOutputFilterSensitiveLog(obj.output) }
}), "ConverseResponseFilterSensitiveLog");
var ConverseStreamRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.messages && { messages: obj.messages.map((item) => MessageFilterSensitiveLog(item)) },
  ...obj.system && { system: obj.system.map((item) => SystemContentBlockFilterSensitiveLog(item)) },
  ...obj.toolConfig && { toolConfig: obj.toolConfig },
  ...obj.promptVariables && { promptVariables: import_smithy_client.SENSITIVE_STRING },
  ...obj.requestMetadata && { requestMetadata: import_smithy_client.SENSITIVE_STRING }
}), "ConverseStreamRequestFilterSensitiveLog");
var ReasoningContentBlockDeltaFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.text !== void 0) return { text: obj.text };
  if (obj.redactedContent !== void 0) return { redactedContent: obj.redactedContent };
  if (obj.signature !== void 0) return { signature: obj.signature };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "ReasoningContentBlockDeltaFilterSensitiveLog");
var ContentBlockDeltaFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.text !== void 0) return { text: obj.text };
  if (obj.toolUse !== void 0) return { toolUse: obj.toolUse };
  if (obj.reasoningContent !== void 0) return { reasoningContent: import_smithy_client.SENSITIVE_STRING };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "ContentBlockDeltaFilterSensitiveLog");
var ContentBlockDeltaEventFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.delta && { delta: ContentBlockDeltaFilterSensitiveLog(obj.delta) }
}), "ContentBlockDeltaEventFilterSensitiveLog");
var ConverseStreamOutputFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.messageStart !== void 0) return { messageStart: obj.messageStart };
  if (obj.contentBlockStart !== void 0) return { contentBlockStart: obj.contentBlockStart };
  if (obj.contentBlockDelta !== void 0)
    return { contentBlockDelta: ContentBlockDeltaEventFilterSensitiveLog(obj.contentBlockDelta) };
  if (obj.contentBlockStop !== void 0) return { contentBlockStop: obj.contentBlockStop };
  if (obj.messageStop !== void 0) return { messageStop: obj.messageStop };
  if (obj.metadata !== void 0) return { metadata: obj.metadata };
  if (obj.internalServerException !== void 0) return { internalServerException: obj.internalServerException };
  if (obj.modelStreamErrorException !== void 0) return { modelStreamErrorException: obj.modelStreamErrorException };
  if (obj.validationException !== void 0) return { validationException: obj.validationException };
  if (obj.throttlingException !== void 0) return { throttlingException: obj.throttlingException };
  if (obj.serviceUnavailableException !== void 0)
    return { serviceUnavailableException: obj.serviceUnavailableException };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "ConverseStreamOutputFilterSensitiveLog");
var ConverseStreamResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.stream && { stream: "STREAMING_CONTENT" }
}), "ConverseStreamResponseFilterSensitiveLog");
var InvokeModelRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.body && { body: import_smithy_client.SENSITIVE_STRING }
}), "InvokeModelRequestFilterSensitiveLog");
var InvokeModelResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.body && { body: import_smithy_client.SENSITIVE_STRING }
}), "InvokeModelResponseFilterSensitiveLog");
var BidirectionalInputPayloadPartFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.bytes && { bytes: import_smithy_client.SENSITIVE_STRING }
}), "BidirectionalInputPayloadPartFilterSensitiveLog");
var InvokeModelWithBidirectionalStreamInputFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.chunk !== void 0) return { chunk: import_smithy_client.SENSITIVE_STRING };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "InvokeModelWithBidirectionalStreamInputFilterSensitiveLog");
var InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.body && { body: "STREAMING_CONTENT" }
}), "InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog");
var BidirectionalOutputPayloadPartFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.bytes && { bytes: import_smithy_client.SENSITIVE_STRING }
}), "BidirectionalOutputPayloadPartFilterSensitiveLog");
var InvokeModelWithBidirectionalStreamOutputFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.chunk !== void 0) return { chunk: import_smithy_client.SENSITIVE_STRING };
  if (obj.internalServerException !== void 0) return { internalServerException: obj.internalServerException };
  if (obj.modelStreamErrorException !== void 0) return { modelStreamErrorException: obj.modelStreamErrorException };
  if (obj.validationException !== void 0) return { validationException: obj.validationException };
  if (obj.throttlingException !== void 0) return { throttlingException: obj.throttlingException };
  if (obj.modelTimeoutException !== void 0) return { modelTimeoutException: obj.modelTimeoutException };
  if (obj.serviceUnavailableException !== void 0)
    return { serviceUnavailableException: obj.serviceUnavailableException };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "InvokeModelWithBidirectionalStreamOutputFilterSensitiveLog");
var InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.body && { body: "STREAMING_CONTENT" }
}), "InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog");
var InvokeModelWithResponseStreamRequestFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.body && { body: import_smithy_client.SENSITIVE_STRING }
}), "InvokeModelWithResponseStreamRequestFilterSensitiveLog");
var PayloadPartFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.bytes && { bytes: import_smithy_client.SENSITIVE_STRING }
}), "PayloadPartFilterSensitiveLog");
var ResponseStreamFilterSensitiveLog = /* @__PURE__ */ __name((obj) => {
  if (obj.chunk !== void 0) return { chunk: import_smithy_client.SENSITIVE_STRING };
  if (obj.internalServerException !== void 0) return { internalServerException: obj.internalServerException };
  if (obj.modelStreamErrorException !== void 0) return { modelStreamErrorException: obj.modelStreamErrorException };
  if (obj.validationException !== void 0) return { validationException: obj.validationException };
  if (obj.throttlingException !== void 0) return { throttlingException: obj.throttlingException };
  if (obj.modelTimeoutException !== void 0) return { modelTimeoutException: obj.modelTimeoutException };
  if (obj.serviceUnavailableException !== void 0)
    return { serviceUnavailableException: obj.serviceUnavailableException };
  if (obj.$unknown !== void 0) return { [obj.$unknown[0]]: "UNKNOWN" };
}, "ResponseStreamFilterSensitiveLog");
var InvokeModelWithResponseStreamResponseFilterSensitiveLog = /* @__PURE__ */ __name((obj) => ({
  ...obj,
  ...obj.body && { body: "STREAMING_CONTENT" }
}), "InvokeModelWithResponseStreamResponseFilterSensitiveLog");

// src/protocols/Aws_restJson1.ts
var import_core2 = require("@aws-sdk/core");


var import_uuid = require("uuid");
var se_ApplyGuardrailCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = {
    "content-type": "application/json"
  };
  b.bp("/guardrail/{guardrailIdentifier}/version/{guardrailVersion}/apply");
  b.p("guardrailIdentifier", () => input.guardrailIdentifier, "{guardrailIdentifier}", false);
  b.p("guardrailVersion", () => input.guardrailVersion, "{guardrailVersion}", false);
  let body;
  body = JSON.stringify(
    (0, import_smithy_client.take)(input, {
      content: /* @__PURE__ */ __name((_) => se_GuardrailContentBlockList(_, context), "content"),
      outputScope: [],
      source: []
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
}, "se_ApplyGuardrailCommand");
var se_ConverseCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = {
    "content-type": "application/json"
  };
  b.bp("/model/{modelId}/converse");
  b.p("modelId", () => input.modelId, "{modelId}", false);
  let body;
  body = JSON.stringify(
    (0, import_smithy_client.take)(input, {
      additionalModelRequestFields: /* @__PURE__ */ __name((_) => se_Document(_, context), "additionalModelRequestFields"),
      additionalModelResponseFieldPaths: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)(_), "additionalModelResponseFieldPaths"),
      guardrailConfig: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)(_), "guardrailConfig"),
      inferenceConfig: /* @__PURE__ */ __name((_) => se_InferenceConfiguration(_, context), "inferenceConfig"),
      messages: /* @__PURE__ */ __name((_) => se_Messages(_, context), "messages"),
      performanceConfig: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)(_), "performanceConfig"),
      promptVariables: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)(_), "promptVariables"),
      requestMetadata: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)(_), "requestMetadata"),
      system: /* @__PURE__ */ __name((_) => se_SystemContentBlocks(_, context), "system"),
      toolConfig: /* @__PURE__ */ __name((_) => se_ToolConfiguration(_, context), "toolConfig")
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
}, "se_ConverseCommand");
var se_ConverseStreamCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = {
    "content-type": "application/json"
  };
  b.bp("/model/{modelId}/converse-stream");
  b.p("modelId", () => input.modelId, "{modelId}", false);
  let body;
  body = JSON.stringify(
    (0, import_smithy_client.take)(input, {
      additionalModelRequestFields: /* @__PURE__ */ __name((_) => se_Document(_, context), "additionalModelRequestFields"),
      additionalModelResponseFieldPaths: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)(_), "additionalModelResponseFieldPaths"),
      guardrailConfig: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)(_), "guardrailConfig"),
      inferenceConfig: /* @__PURE__ */ __name((_) => se_InferenceConfiguration(_, context), "inferenceConfig"),
      messages: /* @__PURE__ */ __name((_) => se_Messages(_, context), "messages"),
      performanceConfig: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)(_), "performanceConfig"),
      promptVariables: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)(_), "promptVariables"),
      requestMetadata: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)(_), "requestMetadata"),
      system: /* @__PURE__ */ __name((_) => se_SystemContentBlocks(_, context), "system"),
      toolConfig: /* @__PURE__ */ __name((_) => se_ToolConfiguration(_, context), "toolConfig")
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
}, "se_ConverseStreamCommand");
var se_GetAsyncInvokeCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = {};
  b.bp("/async-invoke/{invocationArn}");
  b.p("invocationArn", () => input.invocationArn, "{invocationArn}", false);
  let body;
  b.m("GET").h(headers).b(body);
  return b.build();
}, "se_GetAsyncInvokeCommand");
var se_InvokeModelCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = (0, import_smithy_client.map)({}, import_smithy_client.isSerializableHeaderValue, {
    [_ct]: input[_cT] || "application/octet-stream",
    [_a]: input[_a],
    [_xabt]: input[_t],
    [_xabg]: input[_gI],
    [_xabg_]: input[_gV],
    [_xabpl]: input[_pCL]
  });
  b.bp("/model/{modelId}/invoke");
  b.p("modelId", () => input.modelId, "{modelId}", false);
  let body;
  if (input.body !== void 0) {
    body = input.body;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
}, "se_InvokeModelCommand");
var se_InvokeModelWithBidirectionalStreamCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = {
    "content-type": "application/json"
  };
  b.bp("/model/{modelId}/invoke-with-bidirectional-stream");
  b.p("modelId", () => input.modelId, "{modelId}", false);
  let body;
  if (input.body !== void 0) {
    body = se_InvokeModelWithBidirectionalStreamInput(input.body, context);
  }
  b.m("POST").h(headers).b(body);
  return b.build();
}, "se_InvokeModelWithBidirectionalStreamCommand");
var se_InvokeModelWithResponseStreamCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = (0, import_smithy_client.map)({}, import_smithy_client.isSerializableHeaderValue, {
    [_ct]: input[_cT] || "application/octet-stream",
    [_xaba]: input[_a],
    [_xabt]: input[_t],
    [_xabg]: input[_gI],
    [_xabg_]: input[_gV],
    [_xabpl]: input[_pCL]
  });
  b.bp("/model/{modelId}/invoke-with-response-stream");
  b.p("modelId", () => input.modelId, "{modelId}", false);
  let body;
  if (input.body !== void 0) {
    body = input.body;
  }
  b.m("POST").h(headers).b(body);
  return b.build();
}, "se_InvokeModelWithResponseStreamCommand");
var se_ListAsyncInvokesCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = {};
  b.bp("/async-invoke");
  const query = (0, import_smithy_client.map)({
    [_sTA]: [() => input.submitTimeAfter !== void 0, () => (0, import_smithy_client.serializeDateTime)(input[_sTA]).toString()],
    [_sTB]: [() => input.submitTimeBefore !== void 0, () => (0, import_smithy_client.serializeDateTime)(input[_sTB]).toString()],
    [_sE]: [, input[_sE]],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
    [_nT]: [, input[_nT]],
    [_sB]: [, input[_sB]],
    [_sO]: [, input[_sO]]
  });
  let body;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
}, "se_ListAsyncInvokesCommand");
var se_StartAsyncInvokeCommand = /* @__PURE__ */ __name(async (input, context) => {
  const b = (0, import_core.requestBuilder)(input, context);
  const headers = {
    "content-type": "application/json"
  };
  b.bp("/async-invoke");
  let body;
  body = JSON.stringify(
    (0, import_smithy_client.take)(input, {
      clientRequestToken: [true, (_) => _ ?? (0, import_uuid.v4)()],
      modelId: [],
      modelInput: /* @__PURE__ */ __name((_) => se_ModelInputPayload(_, context), "modelInput"),
      outputDataConfig: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)(_), "outputDataConfig"),
      tags: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)(_), "tags")
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
}, "se_StartAsyncInvokeCommand");
var de_ApplyGuardrailCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await (0, import_core2.parseJsonBody)(output.body, context)), "body");
  const doc = (0, import_smithy_client.take)(data, {
    action: import_smithy_client.expectString,
    actionReason: import_smithy_client.expectString,
    assessments: /* @__PURE__ */ __name((_) => de_GuardrailAssessmentList(_, context), "assessments"),
    guardrailCoverage: import_smithy_client._json,
    outputs: import_smithy_client._json,
    usage: import_smithy_client._json
  });
  Object.assign(contents, doc);
  return contents;
}, "de_ApplyGuardrailCommand");
var de_ConverseCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await (0, import_core2.parseJsonBody)(output.body, context)), "body");
  const doc = (0, import_smithy_client.take)(data, {
    additionalModelResponseFields: /* @__PURE__ */ __name((_) => de_Document(_, context), "additionalModelResponseFields"),
    metrics: import_smithy_client._json,
    output: /* @__PURE__ */ __name((_) => de_ConverseOutput((0, import_core2.awsExpectUnion)(_), context), "output"),
    performanceConfig: import_smithy_client._json,
    stopReason: import_smithy_client.expectString,
    trace: /* @__PURE__ */ __name((_) => de_ConverseTrace(_, context), "trace"),
    usage: import_smithy_client._json
  });
  Object.assign(contents, doc);
  return contents;
}, "de_ConverseCommand");
var de_ConverseStreamCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = output.body;
  contents.stream = de_ConverseStreamOutput(data, context);
  return contents;
}, "de_ConverseStreamCommand");
var de_GetAsyncInvokeCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await (0, import_core2.parseJsonBody)(output.body, context)), "body");
  const doc = (0, import_smithy_client.take)(data, {
    clientRequestToken: import_smithy_client.expectString,
    endTime: /* @__PURE__ */ __name((_) => (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(_)), "endTime"),
    failureMessage: import_smithy_client.expectString,
    invocationArn: import_smithy_client.expectString,
    lastModifiedTime: /* @__PURE__ */ __name((_) => (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(_)), "lastModifiedTime"),
    modelArn: import_smithy_client.expectString,
    outputDataConfig: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)((0, import_core2.awsExpectUnion)(_)), "outputDataConfig"),
    status: import_smithy_client.expectString,
    submitTime: /* @__PURE__ */ __name((_) => (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(_)), "submitTime")
  });
  Object.assign(contents, doc);
  return contents;
}, "de_GetAsyncInvokeCommand");
var de_InvokeModelCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_ct]],
    [_pCL]: [, output.headers[_xabpl]]
  });
  const data = await (0, import_smithy_client.collectBody)(output.body, context);
  contents.body = data;
  return contents;
}, "de_InvokeModelCommand");
var de_InvokeModelWithBidirectionalStreamCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = output.body;
  contents.body = de_InvokeModelWithBidirectionalStreamOutput(data, context);
  return contents;
}, "de_InvokeModelWithBidirectionalStreamCommand");
var de_InvokeModelWithResponseStreamCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output),
    [_cT]: [, output.headers[_xabct]],
    [_pCL]: [, output.headers[_xabpl]]
  });
  const data = output.body;
  contents.body = de_ResponseStream(data, context);
  return contents;
}, "de_InvokeModelWithResponseStreamCommand");
var de_ListAsyncInvokesCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await (0, import_core2.parseJsonBody)(output.body, context)), "body");
  const doc = (0, import_smithy_client.take)(data, {
    asyncInvokeSummaries: /* @__PURE__ */ __name((_) => de_AsyncInvokeSummaries(_, context), "asyncInvokeSummaries"),
    nextToken: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  return contents;
}, "de_ListAsyncInvokesCommand");
var de_StartAsyncInvokeCommand = /* @__PURE__ */ __name(async (output, context) => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents = (0, import_smithy_client.map)({
    $metadata: deserializeMetadata(output)
  });
  const data = (0, import_smithy_client.expectNonNull)((0, import_smithy_client.expectObject)(await (0, import_core2.parseJsonBody)(output.body, context)), "body");
  const doc = (0, import_smithy_client.take)(data, {
    invocationArn: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  return contents;
}, "de_StartAsyncInvokeCommand");
var de_CommandError = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await (0, import_core2.parseJsonErrorBody)(output.body, context)
  };
  const errorCode = (0, import_core2.loadRestJsonErrorCode)(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.bedrockruntime#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.bedrockruntime#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.bedrockruntime#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.bedrockruntime#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.bedrockruntime#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.bedrockruntime#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ModelErrorException":
    case "com.amazonaws.bedrockruntime#ModelErrorException":
      throw await de_ModelErrorExceptionRes(parsedOutput, context);
    case "ModelNotReadyException":
    case "com.amazonaws.bedrockruntime#ModelNotReadyException":
      throw await de_ModelNotReadyExceptionRes(parsedOutput, context);
    case "ModelTimeoutException":
    case "com.amazonaws.bedrockruntime#ModelTimeoutException":
      throw await de_ModelTimeoutExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.bedrockruntime#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ModelStreamErrorException":
    case "com.amazonaws.bedrockruntime#ModelStreamErrorException":
      throw await de_ModelStreamErrorExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.bedrockruntime#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode
      });
  }
}, "de_CommandError");
var throwDefaultError = (0, import_smithy_client.withBaseException)(BedrockRuntimeServiceException);
var de_AccessDeniedExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_AccessDeniedExceptionRes");
var de_ConflictExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_ConflictExceptionRes");
var de_InternalServerExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_InternalServerExceptionRes");
var de_ModelErrorExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString,
    originalStatusCode: import_smithy_client.expectInt32,
    resourceName: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new ModelErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_ModelErrorExceptionRes");
var de_ModelNotReadyExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new ModelNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_ModelNotReadyExceptionRes");
var de_ModelStreamErrorExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString,
    originalMessage: import_smithy_client.expectString,
    originalStatusCode: import_smithy_client.expectInt32
  });
  Object.assign(contents, doc);
  const exception = new ModelStreamErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_ModelStreamErrorExceptionRes");
var de_ModelTimeoutExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new ModelTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_ModelTimeoutExceptionRes");
var de_ResourceNotFoundExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_ResourceNotFoundExceptionRes");
var de_ServiceQuotaExceededExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_ServiceQuotaExceededExceptionRes");
var de_ServiceUnavailableExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_ServiceUnavailableExceptionRes");
var de_ThrottlingExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_ThrottlingExceptionRes");
var de_ValidationExceptionRes = /* @__PURE__ */ __name(async (parsedOutput, context) => {
  const contents = (0, import_smithy_client.map)({});
  const data = parsedOutput.body;
  const doc = (0, import_smithy_client.take)(data, {
    message: import_smithy_client.expectString
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents
  });
  return (0, import_smithy_client.decorateServiceException)(exception, parsedOutput.body);
}, "de_ValidationExceptionRes");
var se_InvokeModelWithBidirectionalStreamInput = /* @__PURE__ */ __name((input, context) => {
  const eventMarshallingVisitor = /* @__PURE__ */ __name((event) => InvokeModelWithBidirectionalStreamInput.visit(event, {
    chunk: /* @__PURE__ */ __name((value) => se_BidirectionalInputPayloadPart_event(value, context), "chunk"),
    _: /* @__PURE__ */ __name((value) => value, "_")
  }), "eventMarshallingVisitor");
  return context.eventStreamMarshaller.serialize(input, eventMarshallingVisitor);
}, "se_InvokeModelWithBidirectionalStreamInput");
var se_BidirectionalInputPayloadPart_event = /* @__PURE__ */ __name((input, context) => {
  const headers = {
    ":event-type": { type: "string", value: "chunk" },
    ":message-type": { type: "string", value: "event" },
    ":content-type": { type: "string", value: "application/json" }
  };
  let body = new Uint8Array();
  body = se_BidirectionalInputPayloadPart(input, context);
  body = context.utf8Decoder(JSON.stringify(body));
  return { headers, body };
}, "se_BidirectionalInputPayloadPart_event");
var de_ConverseStreamOutput = /* @__PURE__ */ __name((output, context) => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["messageStart"] != null) {
      return {
        messageStart: await de_MessageStartEvent_event(event["messageStart"], context)
      };
    }
    if (event["contentBlockStart"] != null) {
      return {
        contentBlockStart: await de_ContentBlockStartEvent_event(event["contentBlockStart"], context)
      };
    }
    if (event["contentBlockDelta"] != null) {
      return {
        contentBlockDelta: await de_ContentBlockDeltaEvent_event(event["contentBlockDelta"], context)
      };
    }
    if (event["contentBlockStop"] != null) {
      return {
        contentBlockStop: await de_ContentBlockStopEvent_event(event["contentBlockStop"], context)
      };
    }
    if (event["messageStop"] != null) {
      return {
        messageStop: await de_MessageStopEvent_event(event["messageStop"], context)
      };
    }
    if (event["metadata"] != null) {
      return {
        metadata: await de_ConverseStreamMetadataEvent_event(event["metadata"], context)
      };
    }
    if (event["internalServerException"] != null) {
      return {
        internalServerException: await de_InternalServerException_event(event["internalServerException"], context)
      };
    }
    if (event["modelStreamErrorException"] != null) {
      return {
        modelStreamErrorException: await de_ModelStreamErrorException_event(
          event["modelStreamErrorException"],
          context
        )
      };
    }
    if (event["validationException"] != null) {
      return {
        validationException: await de_ValidationException_event(event["validationException"], context)
      };
    }
    if (event["throttlingException"] != null) {
      return {
        throttlingException: await de_ThrottlingException_event(event["throttlingException"], context)
      };
    }
    if (event["serviceUnavailableException"] != null) {
      return {
        serviceUnavailableException: await de_ServiceUnavailableException_event(
          event["serviceUnavailableException"],
          context
        )
      };
    }
    return { $unknown: output };
  });
}, "de_ConverseStreamOutput");
var de_InvokeModelWithBidirectionalStreamOutput = /* @__PURE__ */ __name((output, context) => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["chunk"] != null) {
      return {
        chunk: await de_BidirectionalOutputPayloadPart_event(event["chunk"], context)
      };
    }
    if (event["internalServerException"] != null) {
      return {
        internalServerException: await de_InternalServerException_event(event["internalServerException"], context)
      };
    }
    if (event["modelStreamErrorException"] != null) {
      return {
        modelStreamErrorException: await de_ModelStreamErrorException_event(
          event["modelStreamErrorException"],
          context
        )
      };
    }
    if (event["validationException"] != null) {
      return {
        validationException: await de_ValidationException_event(event["validationException"], context)
      };
    }
    if (event["throttlingException"] != null) {
      return {
        throttlingException: await de_ThrottlingException_event(event["throttlingException"], context)
      };
    }
    if (event["modelTimeoutException"] != null) {
      return {
        modelTimeoutException: await de_ModelTimeoutException_event(event["modelTimeoutException"], context)
      };
    }
    if (event["serviceUnavailableException"] != null) {
      return {
        serviceUnavailableException: await de_ServiceUnavailableException_event(
          event["serviceUnavailableException"],
          context
        )
      };
    }
    return { $unknown: output };
  });
}, "de_InvokeModelWithBidirectionalStreamOutput");
var de_ResponseStream = /* @__PURE__ */ __name((output, context) => {
  return context.eventStreamMarshaller.deserialize(output, async (event) => {
    if (event["chunk"] != null) {
      return {
        chunk: await de_PayloadPart_event(event["chunk"], context)
      };
    }
    if (event["internalServerException"] != null) {
      return {
        internalServerException: await de_InternalServerException_event(event["internalServerException"], context)
      };
    }
    if (event["modelStreamErrorException"] != null) {
      return {
        modelStreamErrorException: await de_ModelStreamErrorException_event(
          event["modelStreamErrorException"],
          context
        )
      };
    }
    if (event["validationException"] != null) {
      return {
        validationException: await de_ValidationException_event(event["validationException"], context)
      };
    }
    if (event["throttlingException"] != null) {
      return {
        throttlingException: await de_ThrottlingException_event(event["throttlingException"], context)
      };
    }
    if (event["modelTimeoutException"] != null) {
      return {
        modelTimeoutException: await de_ModelTimeoutException_event(event["modelTimeoutException"], context)
      };
    }
    if (event["serviceUnavailableException"] != null) {
      return {
        serviceUnavailableException: await de_ServiceUnavailableException_event(
          event["serviceUnavailableException"],
          context
        )
      };
    }
    return { $unknown: output };
  });
}, "de_ResponseStream");
var de_BidirectionalOutputPayloadPart_event = /* @__PURE__ */ __name(async (output, context) => {
  const contents = {};
  const data = await (0, import_core2.parseJsonBody)(output.body, context);
  Object.assign(contents, de_BidirectionalOutputPayloadPart(data, context));
  return contents;
}, "de_BidirectionalOutputPayloadPart_event");
var de_ContentBlockDeltaEvent_event = /* @__PURE__ */ __name(async (output, context) => {
  const contents = {};
  const data = await (0, import_core2.parseJsonBody)(output.body, context);
  Object.assign(contents, de_ContentBlockDeltaEvent(data, context));
  return contents;
}, "de_ContentBlockDeltaEvent_event");
var de_ContentBlockStartEvent_event = /* @__PURE__ */ __name(async (output, context) => {
  const contents = {};
  const data = await (0, import_core2.parseJsonBody)(output.body, context);
  Object.assign(contents, (0, import_smithy_client._json)(data));
  return contents;
}, "de_ContentBlockStartEvent_event");
var de_ContentBlockStopEvent_event = /* @__PURE__ */ __name(async (output, context) => {
  const contents = {};
  const data = await (0, import_core2.parseJsonBody)(output.body, context);
  Object.assign(contents, (0, import_smithy_client._json)(data));
  return contents;
}, "de_ContentBlockStopEvent_event");
var de_ConverseStreamMetadataEvent_event = /* @__PURE__ */ __name(async (output, context) => {
  const contents = {};
  const data = await (0, import_core2.parseJsonBody)(output.body, context);
  Object.assign(contents, de_ConverseStreamMetadataEvent(data, context));
  return contents;
}, "de_ConverseStreamMetadataEvent_event");
var de_InternalServerException_event = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await (0, import_core2.parseJsonBody)(output.body, context)
  };
  return de_InternalServerExceptionRes(parsedOutput, context);
}, "de_InternalServerException_event");
var de_MessageStartEvent_event = /* @__PURE__ */ __name(async (output, context) => {
  const contents = {};
  const data = await (0, import_core2.parseJsonBody)(output.body, context);
  Object.assign(contents, (0, import_smithy_client._json)(data));
  return contents;
}, "de_MessageStartEvent_event");
var de_MessageStopEvent_event = /* @__PURE__ */ __name(async (output, context) => {
  const contents = {};
  const data = await (0, import_core2.parseJsonBody)(output.body, context);
  Object.assign(contents, de_MessageStopEvent(data, context));
  return contents;
}, "de_MessageStopEvent_event");
var de_ModelStreamErrorException_event = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await (0, import_core2.parseJsonBody)(output.body, context)
  };
  return de_ModelStreamErrorExceptionRes(parsedOutput, context);
}, "de_ModelStreamErrorException_event");
var de_ModelTimeoutException_event = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await (0, import_core2.parseJsonBody)(output.body, context)
  };
  return de_ModelTimeoutExceptionRes(parsedOutput, context);
}, "de_ModelTimeoutException_event");
var de_PayloadPart_event = /* @__PURE__ */ __name(async (output, context) => {
  const contents = {};
  const data = await (0, import_core2.parseJsonBody)(output.body, context);
  Object.assign(contents, de_PayloadPart(data, context));
  return contents;
}, "de_PayloadPart_event");
var de_ServiceUnavailableException_event = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await (0, import_core2.parseJsonBody)(output.body, context)
  };
  return de_ServiceUnavailableExceptionRes(parsedOutput, context);
}, "de_ServiceUnavailableException_event");
var de_ThrottlingException_event = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await (0, import_core2.parseJsonBody)(output.body, context)
  };
  return de_ThrottlingExceptionRes(parsedOutput, context);
}, "de_ThrottlingException_event");
var de_ValidationException_event = /* @__PURE__ */ __name(async (output, context) => {
  const parsedOutput = {
    ...output,
    body: await (0, import_core2.parseJsonBody)(output.body, context)
  };
  return de_ValidationExceptionRes(parsedOutput, context);
}, "de_ValidationException_event");
var se_BidirectionalInputPayloadPart = /* @__PURE__ */ __name((input, context) => {
  return (0, import_smithy_client.take)(input, {
    bytes: context.base64Encoder
  });
}, "se_BidirectionalInputPayloadPart");
var se_ContentBlock = /* @__PURE__ */ __name((input, context) => {
  return ContentBlock.visit(input, {
    cachePoint: /* @__PURE__ */ __name((value) => ({ cachePoint: (0, import_smithy_client._json)(value) }), "cachePoint"),
    document: /* @__PURE__ */ __name((value) => ({ document: se_DocumentBlock(value, context) }), "document"),
    guardContent: /* @__PURE__ */ __name((value) => ({ guardContent: se_GuardrailConverseContentBlock(value, context) }), "guardContent"),
    image: /* @__PURE__ */ __name((value) => ({ image: se_ImageBlock(value, context) }), "image"),
    reasoningContent: /* @__PURE__ */ __name((value) => ({ reasoningContent: se_ReasoningContentBlock(value, context) }), "reasoningContent"),
    text: /* @__PURE__ */ __name((value) => ({ text: value }), "text"),
    toolResult: /* @__PURE__ */ __name((value) => ({ toolResult: se_ToolResultBlock(value, context) }), "toolResult"),
    toolUse: /* @__PURE__ */ __name((value) => ({ toolUse: se_ToolUseBlock(value, context) }), "toolUse"),
    video: /* @__PURE__ */ __name((value) => ({ video: se_VideoBlock(value, context) }), "video"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_ContentBlock");
var se_ContentBlocks = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e) => e != null).map((entry) => {
    return se_ContentBlock(entry, context);
  });
}, "se_ContentBlocks");
var se_DocumentBlock = /* @__PURE__ */ __name((input, context) => {
  return (0, import_smithy_client.take)(input, {
    format: [],
    name: [],
    source: /* @__PURE__ */ __name((_) => se_DocumentSource(_, context), "source")
  });
}, "se_DocumentBlock");
var se_DocumentSource = /* @__PURE__ */ __name((input, context) => {
  return DocumentSource.visit(input, {
    bytes: /* @__PURE__ */ __name((value) => ({ bytes: context.base64Encoder(value) }), "bytes"),
    s3Location: /* @__PURE__ */ __name((value) => ({ s3Location: (0, import_smithy_client._json)(value) }), "s3Location"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_DocumentSource");
var se_GuardrailContentBlock = /* @__PURE__ */ __name((input, context) => {
  return GuardrailContentBlock.visit(input, {
    image: /* @__PURE__ */ __name((value) => ({ image: se_GuardrailImageBlock(value, context) }), "image"),
    text: /* @__PURE__ */ __name((value) => ({ text: (0, import_smithy_client._json)(value) }), "text"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_GuardrailContentBlock");
var se_GuardrailContentBlockList = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e) => e != null).map((entry) => {
    return se_GuardrailContentBlock(entry, context);
  });
}, "se_GuardrailContentBlockList");
var se_GuardrailConverseContentBlock = /* @__PURE__ */ __name((input, context) => {
  return GuardrailConverseContentBlock.visit(input, {
    image: /* @__PURE__ */ __name((value) => ({ image: se_GuardrailConverseImageBlock(value, context) }), "image"),
    text: /* @__PURE__ */ __name((value) => ({ text: (0, import_smithy_client._json)(value) }), "text"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_GuardrailConverseContentBlock");
var se_GuardrailConverseImageBlock = /* @__PURE__ */ __name((input, context) => {
  return (0, import_smithy_client.take)(input, {
    format: [],
    source: /* @__PURE__ */ __name((_) => se_GuardrailConverseImageSource(_, context), "source")
  });
}, "se_GuardrailConverseImageBlock");
var se_GuardrailConverseImageSource = /* @__PURE__ */ __name((input, context) => {
  return GuardrailConverseImageSource.visit(input, {
    bytes: /* @__PURE__ */ __name((value) => ({ bytes: context.base64Encoder(value) }), "bytes"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_GuardrailConverseImageSource");
var se_GuardrailImageBlock = /* @__PURE__ */ __name((input, context) => {
  return (0, import_smithy_client.take)(input, {
    format: [],
    source: /* @__PURE__ */ __name((_) => se_GuardrailImageSource(_, context), "source")
  });
}, "se_GuardrailImageBlock");
var se_GuardrailImageSource = /* @__PURE__ */ __name((input, context) => {
  return GuardrailImageSource.visit(input, {
    bytes: /* @__PURE__ */ __name((value) => ({ bytes: context.base64Encoder(value) }), "bytes"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_GuardrailImageSource");
var se_ImageBlock = /* @__PURE__ */ __name((input, context) => {
  return (0, import_smithy_client.take)(input, {
    format: [],
    source: /* @__PURE__ */ __name((_) => se_ImageSource(_, context), "source")
  });
}, "se_ImageBlock");
var se_ImageSource = /* @__PURE__ */ __name((input, context) => {
  return ImageSource.visit(input, {
    bytes: /* @__PURE__ */ __name((value) => ({ bytes: context.base64Encoder(value) }), "bytes"),
    s3Location: /* @__PURE__ */ __name((value) => ({ s3Location: (0, import_smithy_client._json)(value) }), "s3Location"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_ImageSource");
var se_InferenceConfiguration = /* @__PURE__ */ __name((input, context) => {
  return (0, import_smithy_client.take)(input, {
    maxTokens: [],
    stopSequences: import_smithy_client._json,
    temperature: import_smithy_client.serializeFloat,
    topP: import_smithy_client.serializeFloat
  });
}, "se_InferenceConfiguration");
var se_Message = /* @__PURE__ */ __name((input, context) => {
  return (0, import_smithy_client.take)(input, {
    content: /* @__PURE__ */ __name((_) => se_ContentBlocks(_, context), "content"),
    role: []
  });
}, "se_Message");
var se_Messages = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e) => e != null).map((entry) => {
    return se_Message(entry, context);
  });
}, "se_Messages");
var se_ModelInputPayload = /* @__PURE__ */ __name((input, context) => {
  return input;
}, "se_ModelInputPayload");
var se_ReasoningContentBlock = /* @__PURE__ */ __name((input, context) => {
  return ReasoningContentBlock.visit(input, {
    reasoningText: /* @__PURE__ */ __name((value) => ({ reasoningText: (0, import_smithy_client._json)(value) }), "reasoningText"),
    redactedContent: /* @__PURE__ */ __name((value) => ({ redactedContent: context.base64Encoder(value) }), "redactedContent"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_ReasoningContentBlock");
var se_SystemContentBlock = /* @__PURE__ */ __name((input, context) => {
  return SystemContentBlock.visit(input, {
    cachePoint: /* @__PURE__ */ __name((value) => ({ cachePoint: (0, import_smithy_client._json)(value) }), "cachePoint"),
    guardContent: /* @__PURE__ */ __name((value) => ({ guardContent: se_GuardrailConverseContentBlock(value, context) }), "guardContent"),
    text: /* @__PURE__ */ __name((value) => ({ text: value }), "text"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_SystemContentBlock");
var se_SystemContentBlocks = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e) => e != null).map((entry) => {
    return se_SystemContentBlock(entry, context);
  });
}, "se_SystemContentBlocks");
var se_Tool = /* @__PURE__ */ __name((input, context) => {
  return Tool.visit(input, {
    cachePoint: /* @__PURE__ */ __name((value) => ({ cachePoint: (0, import_smithy_client._json)(value) }), "cachePoint"),
    toolSpec: /* @__PURE__ */ __name((value) => ({ toolSpec: se_ToolSpecification(value, context) }), "toolSpec"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_Tool");
var se_ToolConfiguration = /* @__PURE__ */ __name((input, context) => {
  return (0, import_smithy_client.take)(input, {
    toolChoice: import_smithy_client._json,
    tools: /* @__PURE__ */ __name((_) => se_Tools(_, context), "tools")
  });
}, "se_ToolConfiguration");
var se_ToolInputSchema = /* @__PURE__ */ __name((input, context) => {
  return ToolInputSchema.visit(input, {
    json: /* @__PURE__ */ __name((value) => ({ json: se_Document(value, context) }), "json"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_ToolInputSchema");
var se_ToolResultBlock = /* @__PURE__ */ __name((input, context) => {
  return (0, import_smithy_client.take)(input, {
    content: /* @__PURE__ */ __name((_) => se_ToolResultContentBlocks(_, context), "content"),
    status: [],
    toolUseId: []
  });
}, "se_ToolResultBlock");
var se_ToolResultContentBlock = /* @__PURE__ */ __name((input, context) => {
  return ToolResultContentBlock.visit(input, {
    document: /* @__PURE__ */ __name((value) => ({ document: se_DocumentBlock(value, context) }), "document"),
    image: /* @__PURE__ */ __name((value) => ({ image: se_ImageBlock(value, context) }), "image"),
    json: /* @__PURE__ */ __name((value) => ({ json: se_Document(value, context) }), "json"),
    text: /* @__PURE__ */ __name((value) => ({ text: value }), "text"),
    video: /* @__PURE__ */ __name((value) => ({ video: se_VideoBlock(value, context) }), "video"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_ToolResultContentBlock");
var se_ToolResultContentBlocks = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e) => e != null).map((entry) => {
    return se_ToolResultContentBlock(entry, context);
  });
}, "se_ToolResultContentBlocks");
var se_Tools = /* @__PURE__ */ __name((input, context) => {
  return input.filter((e) => e != null).map((entry) => {
    return se_Tool(entry, context);
  });
}, "se_Tools");
var se_ToolSpecification = /* @__PURE__ */ __name((input, context) => {
  return (0, import_smithy_client.take)(input, {
    description: [],
    inputSchema: /* @__PURE__ */ __name((_) => se_ToolInputSchema(_, context), "inputSchema"),
    name: []
  });
}, "se_ToolSpecification");
var se_ToolUseBlock = /* @__PURE__ */ __name((input, context) => {
  return (0, import_smithy_client.take)(input, {
    input: /* @__PURE__ */ __name((_) => se_Document(_, context), "input"),
    name: [],
    toolUseId: []
  });
}, "se_ToolUseBlock");
var se_VideoBlock = /* @__PURE__ */ __name((input, context) => {
  return (0, import_smithy_client.take)(input, {
    format: [],
    source: /* @__PURE__ */ __name((_) => se_VideoSource(_, context), "source")
  });
}, "se_VideoBlock");
var se_VideoSource = /* @__PURE__ */ __name((input, context) => {
  return VideoSource.visit(input, {
    bytes: /* @__PURE__ */ __name((value) => ({ bytes: context.base64Encoder(value) }), "bytes"),
    s3Location: /* @__PURE__ */ __name((value) => ({ s3Location: (0, import_smithy_client._json)(value) }), "s3Location"),
    _: /* @__PURE__ */ __name((name, value) => ({ [name]: value }), "_")
  });
}, "se_VideoSource");
var se_Document = /* @__PURE__ */ __name((input, context) => {
  return input;
}, "se_Document");
var de_AsyncInvokeSummaries = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e) => e != null).map((entry) => {
    return de_AsyncInvokeSummary(entry, context);
  });
  return retVal;
}, "de_AsyncInvokeSummaries");
var de_AsyncInvokeSummary = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    clientRequestToken: import_smithy_client.expectString,
    endTime: /* @__PURE__ */ __name((_) => (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(_)), "endTime"),
    failureMessage: import_smithy_client.expectString,
    invocationArn: import_smithy_client.expectString,
    lastModifiedTime: /* @__PURE__ */ __name((_) => (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(_)), "lastModifiedTime"),
    modelArn: import_smithy_client.expectString,
    outputDataConfig: /* @__PURE__ */ __name((_) => (0, import_smithy_client._json)((0, import_core2.awsExpectUnion)(_)), "outputDataConfig"),
    status: import_smithy_client.expectString,
    submitTime: /* @__PURE__ */ __name((_) => (0, import_smithy_client.expectNonNull)((0, import_smithy_client.parseRfc3339DateTimeWithOffset)(_)), "submitTime")
  });
}, "de_AsyncInvokeSummary");
var de_BidirectionalOutputPayloadPart = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    bytes: context.base64Decoder
  });
}, "de_BidirectionalOutputPayloadPart");
var de_ContentBlock = /* @__PURE__ */ __name((output, context) => {
  if (output.cachePoint != null) {
    return {
      cachePoint: (0, import_smithy_client._json)(output.cachePoint)
    };
  }
  if (output.document != null) {
    return {
      document: de_DocumentBlock(output.document, context)
    };
  }
  if (output.guardContent != null) {
    return {
      guardContent: de_GuardrailConverseContentBlock((0, import_core2.awsExpectUnion)(output.guardContent), context)
    };
  }
  if (output.image != null) {
    return {
      image: de_ImageBlock(output.image, context)
    };
  }
  if (output.reasoningContent != null) {
    return {
      reasoningContent: de_ReasoningContentBlock((0, import_core2.awsExpectUnion)(output.reasoningContent), context)
    };
  }
  if ((0, import_smithy_client.expectString)(output.text) !== void 0) {
    return { text: (0, import_smithy_client.expectString)(output.text) };
  }
  if (output.toolResult != null) {
    return {
      toolResult: de_ToolResultBlock(output.toolResult, context)
    };
  }
  if (output.toolUse != null) {
    return {
      toolUse: de_ToolUseBlock(output.toolUse, context)
    };
  }
  if (output.video != null) {
    return {
      video: de_VideoBlock(output.video, context)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_ContentBlock");
var de_ContentBlockDelta = /* @__PURE__ */ __name((output, context) => {
  if (output.reasoningContent != null) {
    return {
      reasoningContent: de_ReasoningContentBlockDelta((0, import_core2.awsExpectUnion)(output.reasoningContent), context)
    };
  }
  if ((0, import_smithy_client.expectString)(output.text) !== void 0) {
    return { text: (0, import_smithy_client.expectString)(output.text) };
  }
  if (output.toolUse != null) {
    return {
      toolUse: (0, import_smithy_client._json)(output.toolUse)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_ContentBlockDelta");
var de_ContentBlockDeltaEvent = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    contentBlockIndex: import_smithy_client.expectInt32,
    delta: /* @__PURE__ */ __name((_) => de_ContentBlockDelta((0, import_core2.awsExpectUnion)(_), context), "delta")
  });
}, "de_ContentBlockDeltaEvent");
var de_ContentBlocks = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e) => e != null).map((entry) => {
    return de_ContentBlock((0, import_core2.awsExpectUnion)(entry), context);
  });
  return retVal;
}, "de_ContentBlocks");
var de_ConverseOutput = /* @__PURE__ */ __name((output, context) => {
  if (output.message != null) {
    return {
      message: de_Message(output.message, context)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_ConverseOutput");
var de_ConverseStreamMetadataEvent = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    metrics: import_smithy_client._json,
    performanceConfig: import_smithy_client._json,
    trace: /* @__PURE__ */ __name((_) => de_ConverseStreamTrace(_, context), "trace"),
    usage: import_smithy_client._json
  });
}, "de_ConverseStreamMetadataEvent");
var de_ConverseStreamTrace = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    guardrail: /* @__PURE__ */ __name((_) => de_GuardrailTraceAssessment(_, context), "guardrail"),
    promptRouter: import_smithy_client._json
  });
}, "de_ConverseStreamTrace");
var de_ConverseTrace = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    guardrail: /* @__PURE__ */ __name((_) => de_GuardrailTraceAssessment(_, context), "guardrail"),
    promptRouter: import_smithy_client._json
  });
}, "de_ConverseTrace");
var de_DocumentBlock = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    format: import_smithy_client.expectString,
    name: import_smithy_client.expectString,
    source: /* @__PURE__ */ __name((_) => de_DocumentSource((0, import_core2.awsExpectUnion)(_), context), "source")
  });
}, "de_DocumentBlock");
var de_DocumentSource = /* @__PURE__ */ __name((output, context) => {
  if (output.bytes != null) {
    return {
      bytes: context.base64Decoder(output.bytes)
    };
  }
  if (output.s3Location != null) {
    return {
      s3Location: (0, import_smithy_client._json)(output.s3Location)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_DocumentSource");
var de_GuardrailAssessment = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    contentPolicy: import_smithy_client._json,
    contextualGroundingPolicy: /* @__PURE__ */ __name((_) => de_GuardrailContextualGroundingPolicyAssessment(_, context), "contextualGroundingPolicy"),
    invocationMetrics: import_smithy_client._json,
    sensitiveInformationPolicy: import_smithy_client._json,
    topicPolicy: import_smithy_client._json,
    wordPolicy: import_smithy_client._json
  });
}, "de_GuardrailAssessment");
var de_GuardrailAssessmentList = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e) => e != null).map((entry) => {
    return de_GuardrailAssessment(entry, context);
  });
  return retVal;
}, "de_GuardrailAssessmentList");
var de_GuardrailAssessmentListMap = /* @__PURE__ */ __name((output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_GuardrailAssessmentList(value, context);
    return acc;
  }, {});
}, "de_GuardrailAssessmentListMap");
var de_GuardrailAssessmentMap = /* @__PURE__ */ __name((output, context) => {
  return Object.entries(output).reduce((acc, [key, value]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_GuardrailAssessment(value, context);
    return acc;
  }, {});
}, "de_GuardrailAssessmentMap");
var de_GuardrailContextualGroundingFilter = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    action: import_smithy_client.expectString,
    detected: import_smithy_client.expectBoolean,
    score: import_smithy_client.limitedParseDouble,
    threshold: import_smithy_client.limitedParseDouble,
    type: import_smithy_client.expectString
  });
}, "de_GuardrailContextualGroundingFilter");
var de_GuardrailContextualGroundingFilters = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e) => e != null).map((entry) => {
    return de_GuardrailContextualGroundingFilter(entry, context);
  });
  return retVal;
}, "de_GuardrailContextualGroundingFilters");
var de_GuardrailContextualGroundingPolicyAssessment = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    filters: /* @__PURE__ */ __name((_) => de_GuardrailContextualGroundingFilters(_, context), "filters")
  });
}, "de_GuardrailContextualGroundingPolicyAssessment");
var de_GuardrailConverseContentBlock = /* @__PURE__ */ __name((output, context) => {
  if (output.image != null) {
    return {
      image: de_GuardrailConverseImageBlock(output.image, context)
    };
  }
  if (output.text != null) {
    return {
      text: (0, import_smithy_client._json)(output.text)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_GuardrailConverseContentBlock");
var de_GuardrailConverseImageBlock = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    format: import_smithy_client.expectString,
    source: /* @__PURE__ */ __name((_) => de_GuardrailConverseImageSource((0, import_core2.awsExpectUnion)(_), context), "source")
  });
}, "de_GuardrailConverseImageBlock");
var de_GuardrailConverseImageSource = /* @__PURE__ */ __name((output, context) => {
  if (output.bytes != null) {
    return {
      bytes: context.base64Decoder(output.bytes)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_GuardrailConverseImageSource");
var de_GuardrailTraceAssessment = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    actionReason: import_smithy_client.expectString,
    inputAssessment: /* @__PURE__ */ __name((_) => de_GuardrailAssessmentMap(_, context), "inputAssessment"),
    modelOutput: import_smithy_client._json,
    outputAssessments: /* @__PURE__ */ __name((_) => de_GuardrailAssessmentListMap(_, context), "outputAssessments")
  });
}, "de_GuardrailTraceAssessment");
var de_ImageBlock = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    format: import_smithy_client.expectString,
    source: /* @__PURE__ */ __name((_) => de_ImageSource((0, import_core2.awsExpectUnion)(_), context), "source")
  });
}, "de_ImageBlock");
var de_ImageSource = /* @__PURE__ */ __name((output, context) => {
  if (output.bytes != null) {
    return {
      bytes: context.base64Decoder(output.bytes)
    };
  }
  if (output.s3Location != null) {
    return {
      s3Location: (0, import_smithy_client._json)(output.s3Location)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_ImageSource");
var de_Message = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    content: /* @__PURE__ */ __name((_) => de_ContentBlocks(_, context), "content"),
    role: import_smithy_client.expectString
  });
}, "de_Message");
var de_MessageStopEvent = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    additionalModelResponseFields: /* @__PURE__ */ __name((_) => de_Document(_, context), "additionalModelResponseFields"),
    stopReason: import_smithy_client.expectString
  });
}, "de_MessageStopEvent");
var de_PayloadPart = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    bytes: context.base64Decoder
  });
}, "de_PayloadPart");
var de_ReasoningContentBlock = /* @__PURE__ */ __name((output, context) => {
  if (output.reasoningText != null) {
    return {
      reasoningText: (0, import_smithy_client._json)(output.reasoningText)
    };
  }
  if (output.redactedContent != null) {
    return {
      redactedContent: context.base64Decoder(output.redactedContent)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_ReasoningContentBlock");
var de_ReasoningContentBlockDelta = /* @__PURE__ */ __name((output, context) => {
  if (output.redactedContent != null) {
    return {
      redactedContent: context.base64Decoder(output.redactedContent)
    };
  }
  if ((0, import_smithy_client.expectString)(output.signature) !== void 0) {
    return { signature: (0, import_smithy_client.expectString)(output.signature) };
  }
  if ((0, import_smithy_client.expectString)(output.text) !== void 0) {
    return { text: (0, import_smithy_client.expectString)(output.text) };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_ReasoningContentBlockDelta");
var de_ToolResultBlock = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    content: /* @__PURE__ */ __name((_) => de_ToolResultContentBlocks(_, context), "content"),
    status: import_smithy_client.expectString,
    toolUseId: import_smithy_client.expectString
  });
}, "de_ToolResultBlock");
var de_ToolResultContentBlock = /* @__PURE__ */ __name((output, context) => {
  if (output.document != null) {
    return {
      document: de_DocumentBlock(output.document, context)
    };
  }
  if (output.image != null) {
    return {
      image: de_ImageBlock(output.image, context)
    };
  }
  if (output.json != null) {
    return {
      json: de_Document(output.json, context)
    };
  }
  if ((0, import_smithy_client.expectString)(output.text) !== void 0) {
    return { text: (0, import_smithy_client.expectString)(output.text) };
  }
  if (output.video != null) {
    return {
      video: de_VideoBlock(output.video, context)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_ToolResultContentBlock");
var de_ToolResultContentBlocks = /* @__PURE__ */ __name((output, context) => {
  const retVal = (output || []).filter((e) => e != null).map((entry) => {
    return de_ToolResultContentBlock((0, import_core2.awsExpectUnion)(entry), context);
  });
  return retVal;
}, "de_ToolResultContentBlocks");
var de_ToolUseBlock = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    input: /* @__PURE__ */ __name((_) => de_Document(_, context), "input"),
    name: import_smithy_client.expectString,
    toolUseId: import_smithy_client.expectString
  });
}, "de_ToolUseBlock");
var de_VideoBlock = /* @__PURE__ */ __name((output, context) => {
  return (0, import_smithy_client.take)(output, {
    format: import_smithy_client.expectString,
    source: /* @__PURE__ */ __name((_) => de_VideoSource((0, import_core2.awsExpectUnion)(_), context), "source")
  });
}, "de_VideoBlock");
var de_VideoSource = /* @__PURE__ */ __name((output, context) => {
  if (output.bytes != null) {
    return {
      bytes: context.base64Decoder(output.bytes)
    };
  }
  if (output.s3Location != null) {
    return {
      s3Location: (0, import_smithy_client._json)(output.s3Location)
    };
  }
  return { $unknown: Object.entries(output)[0] };
}, "de_VideoSource");
var de_Document = /* @__PURE__ */ __name((output, context) => {
  return output;
}, "de_Document");
var deserializeMetadata = /* @__PURE__ */ __name((output) => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"]
}), "deserializeMetadata");
var _a = "accept";
var _cT = "contentType";
var _ct = "content-type";
var _gI = "guardrailIdentifier";
var _gV = "guardrailVersion";
var _mR = "maxResults";
var _nT = "nextToken";
var _pCL = "performanceConfigLatency";
var _sB = "sortBy";
var _sE = "statusEquals";
var _sO = "sortOrder";
var _sTA = "submitTimeAfter";
var _sTB = "submitTimeBefore";
var _t = "trace";
var _xaba = "x-amzn-bedrock-accept";
var _xabct = "x-amzn-bedrock-content-type";
var _xabg = "x-amzn-bedrock-guardrailidentifier";
var _xabg_ = "x-amzn-bedrock-guardrailversion";
var _xabpl = "x-amzn-bedrock-performanceconfig-latency";
var _xabt = "x-amzn-bedrock-trace";

// src/commands/ApplyGuardrailCommand.ts
var ApplyGuardrailCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AmazonBedrockFrontendService", "ApplyGuardrail", {}).n("BedrockRuntimeClient", "ApplyGuardrailCommand").f(ApplyGuardrailRequestFilterSensitiveLog, void 0).ser(se_ApplyGuardrailCommand).de(de_ApplyGuardrailCommand).build() {
  static {
    __name(this, "ApplyGuardrailCommand");
  }
};

// src/commands/ConverseCommand.ts



var ConverseCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AmazonBedrockFrontendService", "Converse", {}).n("BedrockRuntimeClient", "ConverseCommand").f(ConverseRequestFilterSensitiveLog, ConverseResponseFilterSensitiveLog).ser(se_ConverseCommand).de(de_ConverseCommand).build() {
  static {
    __name(this, "ConverseCommand");
  }
};

// src/commands/ConverseStreamCommand.ts



var ConverseStreamCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AmazonBedrockFrontendService", "ConverseStream", {
  /**
   * @internal
   */
  eventStream: {
    output: true
  }
}).n("BedrockRuntimeClient", "ConverseStreamCommand").f(ConverseStreamRequestFilterSensitiveLog, ConverseStreamResponseFilterSensitiveLog).ser(se_ConverseStreamCommand).de(de_ConverseStreamCommand).build() {
  static {
    __name(this, "ConverseStreamCommand");
  }
};

// src/commands/GetAsyncInvokeCommand.ts



var GetAsyncInvokeCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AmazonBedrockFrontendService", "GetAsyncInvoke", {}).n("BedrockRuntimeClient", "GetAsyncInvokeCommand").f(void 0, GetAsyncInvokeResponseFilterSensitiveLog).ser(se_GetAsyncInvokeCommand).de(de_GetAsyncInvokeCommand).build() {
  static {
    __name(this, "GetAsyncInvokeCommand");
  }
};

// src/commands/InvokeModelCommand.ts



var InvokeModelCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AmazonBedrockFrontendService", "InvokeModel", {}).n("BedrockRuntimeClient", "InvokeModelCommand").f(InvokeModelRequestFilterSensitiveLog, InvokeModelResponseFilterSensitiveLog).ser(se_InvokeModelCommand).de(de_InvokeModelCommand).build() {
  static {
    __name(this, "InvokeModelCommand");
  }
};

// src/commands/InvokeModelWithBidirectionalStreamCommand.ts




var InvokeModelWithBidirectionalStreamCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions()),
    (0, import_middleware_eventstream.getEventStreamPlugin)(config)
  ];
}).s("AmazonBedrockFrontendService", "InvokeModelWithBidirectionalStream", {
  /**
   * @internal
   */
  eventStream: {
    input: true,
    output: true
  }
}).n("BedrockRuntimeClient", "InvokeModelWithBidirectionalStreamCommand").f(
  InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog,
  InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog
).ser(se_InvokeModelWithBidirectionalStreamCommand).de(de_InvokeModelWithBidirectionalStreamCommand).build() {
  static {
    __name(this, "InvokeModelWithBidirectionalStreamCommand");
  }
};

// src/commands/InvokeModelWithResponseStreamCommand.ts



var InvokeModelWithResponseStreamCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AmazonBedrockFrontendService", "InvokeModelWithResponseStream", {
  /**
   * @internal
   */
  eventStream: {
    output: true
  }
}).n("BedrockRuntimeClient", "InvokeModelWithResponseStreamCommand").f(InvokeModelWithResponseStreamRequestFilterSensitiveLog, InvokeModelWithResponseStreamResponseFilterSensitiveLog).ser(se_InvokeModelWithResponseStreamCommand).de(de_InvokeModelWithResponseStreamCommand).build() {
  static {
    __name(this, "InvokeModelWithResponseStreamCommand");
  }
};

// src/commands/ListAsyncInvokesCommand.ts



var ListAsyncInvokesCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AmazonBedrockFrontendService", "ListAsyncInvokes", {}).n("BedrockRuntimeClient", "ListAsyncInvokesCommand").f(void 0, ListAsyncInvokesResponseFilterSensitiveLog).ser(se_ListAsyncInvokesCommand).de(de_ListAsyncInvokesCommand).build() {
  static {
    __name(this, "ListAsyncInvokesCommand");
  }
};

// src/commands/StartAsyncInvokeCommand.ts



var StartAsyncInvokeCommand = class extends import_smithy_client.Command.classBuilder().ep(commonParams).m(function(Command, cs, config, o) {
  return [
    (0, import_middleware_serde.getSerdePlugin)(config, this.serialize, this.deserialize),
    (0, import_middleware_endpoint.getEndpointPlugin)(config, Command.getEndpointParameterInstructions())
  ];
}).s("AmazonBedrockFrontendService", "StartAsyncInvoke", {}).n("BedrockRuntimeClient", "StartAsyncInvokeCommand").f(StartAsyncInvokeRequestFilterSensitiveLog, void 0).ser(se_StartAsyncInvokeCommand).de(de_StartAsyncInvokeCommand).build() {
  static {
    __name(this, "StartAsyncInvokeCommand");
  }
};

// src/BedrockRuntime.ts
var commands = {
  ApplyGuardrailCommand,
  ConverseCommand,
  ConverseStreamCommand,
  GetAsyncInvokeCommand,
  InvokeModelCommand,
  InvokeModelWithBidirectionalStreamCommand,
  InvokeModelWithResponseStreamCommand,
  ListAsyncInvokesCommand,
  StartAsyncInvokeCommand
};
var BedrockRuntime = class extends BedrockRuntimeClient {
  static {
    __name(this, "BedrockRuntime");
  }
};
(0, import_smithy_client.createAggregatedClient)(commands, BedrockRuntime);

// src/pagination/ListAsyncInvokesPaginator.ts

var paginateListAsyncInvokes = (0, import_core.createPaginator)(BedrockRuntimeClient, ListAsyncInvokesCommand, "nextToken", "nextToken", "maxResults");
// Annotate the CommonJS export names for ESM import in node:

0 && (module.exports = {
  BedrockRuntimeServiceException,
  __Client,
  BedrockRuntimeClient,
  BedrockRuntime,
  $Command,
  ApplyGuardrailCommand,
  ConverseCommand,
  ConverseStreamCommand,
  GetAsyncInvokeCommand,
  InvokeModelCommand,
  InvokeModelWithBidirectionalStreamCommand,
  InvokeModelWithResponseStreamCommand,
  ListAsyncInvokesCommand,
  StartAsyncInvokeCommand,
  paginateListAsyncInvokes,
  AccessDeniedException,
  AsyncInvokeOutputDataConfig,
  AsyncInvokeStatus,
  InternalServerException,
  ThrottlingException,
  ValidationException,
  SortAsyncInvocationBy,
  SortOrder,
  ConflictException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  GuardrailImageFormat,
  GuardrailImageSource,
  GuardrailContentQualifier,
  GuardrailContentBlock,
  GuardrailOutputScope,
  GuardrailContentSource,
  GuardrailAction,
  GuardrailContentPolicyAction,
  GuardrailContentFilterConfidence,
  GuardrailContentFilterStrength,
  GuardrailContentFilterType,
  GuardrailContextualGroundingPolicyAction,
  GuardrailContextualGroundingFilterType,
  GuardrailSensitiveInformationPolicyAction,
  GuardrailPiiEntityType,
  GuardrailTopicPolicyAction,
  GuardrailTopicType,
  GuardrailWordPolicyAction,
  GuardrailManagedWordType,
  GuardrailTrace,
  CachePointType,
  DocumentFormat,
  DocumentSource,
  GuardrailConverseImageFormat,
  GuardrailConverseImageSource,
  GuardrailConverseContentQualifier,
  GuardrailConverseContentBlock,
  ImageFormat,
  ImageSource,
  ReasoningContentBlock,
  VideoFormat,
  VideoSource,
  ToolResultContentBlock,
  ToolResultStatus,
  ContentBlock,
  ConversationRole,
  PerformanceConfigLatency,
  PromptVariableValues,
  SystemContentBlock,
  ToolChoice,
  ToolInputSchema,
  Tool,
  ConverseOutput,
  StopReason,
  ModelErrorException,
  ModelNotReadyException,
  ModelTimeoutException,
  GuardrailStreamProcessingMode,
  ReasoningContentBlockDelta,
  ContentBlockDelta,
  ContentBlockStart,
  ModelStreamErrorException,
  ConverseStreamOutput,
  Trace,
  InvokeModelWithBidirectionalStreamInput,
  InvokeModelWithBidirectionalStreamOutput,
  ResponseStream,
  GetAsyncInvokeResponseFilterSensitiveLog,
  AsyncInvokeSummaryFilterSensitiveLog,
  ListAsyncInvokesResponseFilterSensitiveLog,
  StartAsyncInvokeRequestFilterSensitiveLog,
  GuardrailImageSourceFilterSensitiveLog,
  GuardrailImageBlockFilterSensitiveLog,
  GuardrailContentBlockFilterSensitiveLog,
  ApplyGuardrailRequestFilterSensitiveLog,
  GuardrailConverseImageSourceFilterSensitiveLog,
  GuardrailConverseImageBlockFilterSensitiveLog,
  GuardrailConverseContentBlockFilterSensitiveLog,
  ReasoningTextBlockFilterSensitiveLog,
  ReasoningContentBlockFilterSensitiveLog,
  ContentBlockFilterSensitiveLog,
  MessageFilterSensitiveLog,
  SystemContentBlockFilterSensitiveLog,
  ConverseRequestFilterSensitiveLog,
  ConverseOutputFilterSensitiveLog,
  ConverseResponseFilterSensitiveLog,
  ConverseStreamRequestFilterSensitiveLog,
  ReasoningContentBlockDeltaFilterSensitiveLog,
  ContentBlockDeltaFilterSensitiveLog,
  ContentBlockDeltaEventFilterSensitiveLog,
  ConverseStreamOutputFilterSensitiveLog,
  ConverseStreamResponseFilterSensitiveLog,
  InvokeModelRequestFilterSensitiveLog,
  InvokeModelResponseFilterSensitiveLog,
  BidirectionalInputPayloadPartFilterSensitiveLog,
  InvokeModelWithBidirectionalStreamInputFilterSensitiveLog,
  InvokeModelWithBidirectionalStreamRequestFilterSensitiveLog,
  BidirectionalOutputPayloadPartFilterSensitiveLog,
  InvokeModelWithBidirectionalStreamOutputFilterSensitiveLog,
  InvokeModelWithBidirectionalStreamResponseFilterSensitiveLog,
  InvokeModelWithResponseStreamRequestFilterSensitiveLog,
  PayloadPartFilterSensitiveLog,
  ResponseStreamFilterSensitiveLog,
  InvokeModelWithResponseStreamResponseFilterSensitiveLog
});

