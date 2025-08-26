import $protobuf from "@ohos/protobufjs";
import Long = require("long");
/** Namespace license_protocol. */
export namespace license_protocol {

    /** LicenseType enum. */
    enum LicenseType {
        STREAMING = 1,
        OFFLINE = 2,
        AUTOMATIC = 3
    }

    /** PlatformVerificationStatus enum. */
    enum PlatformVerificationStatus {
        PLATFORM_UNVERIFIED = 0,
        PLATFORM_TAMPERED = 1,
        PLATFORM_SOFTWARE_VERIFIED = 2,
        PLATFORM_HARDWARE_VERIFIED = 3,
        PLATFORM_NO_VERIFICATION = 4,
        PLATFORM_SECURE_STORAGE_SOFTWARE_VERIFIED = 5
    }

    /** Properties of a LicenseIdentification. */
    interface ILicenseIdentification {

        /** LicenseIdentification requestId */
        requestId?: (Uint8Array|null);

        /** LicenseIdentification sessionId */
        sessionId?: (Uint8Array|null);

        /** LicenseIdentification purchaseId */
        purchaseId?: (Uint8Array|null);

        /** LicenseIdentification type */
        type?: (license_protocol.LicenseType|null);

        /** LicenseIdentification version */
        version?: (number|null);

        /** LicenseIdentification providerSessionToken */
        providerSessionToken?: (Uint8Array|null);
    }

    /** Represents a LicenseIdentification. */
    class LicenseIdentification implements ILicenseIdentification {

        /**
         * Constructs a new LicenseIdentification.
         * @param [properties] Properties to set
         */
        constructor(properties?: license_protocol.ILicenseIdentification);

        /** LicenseIdentification requestId. */
        public requestId: Uint8Array;

        /** LicenseIdentification sessionId. */
        public sessionId: Uint8Array;

        /** LicenseIdentification purchaseId. */
        public purchaseId: Uint8Array;

        /** LicenseIdentification type. */
        public type: license_protocol.LicenseType;

        /** LicenseIdentification version. */
        public version: number;

        /** LicenseIdentification providerSessionToken. */
        public providerSessionToken: Uint8Array;

        /**
         * Creates a new LicenseIdentification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LicenseIdentification instance
         */
        public static create(properties?: license_protocol.ILicenseIdentification): license_protocol.LicenseIdentification;

        /**
         * Encodes the specified LicenseIdentification message. Does not implicitly {@link license_protocol.LicenseIdentification.verify|verify} messages.
         * @param message LicenseIdentification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: license_protocol.ILicenseIdentification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LicenseIdentification message, length delimited. Does not implicitly {@link license_protocol.LicenseIdentification.verify|verify} messages.
         * @param message LicenseIdentification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: license_protocol.ILicenseIdentification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LicenseIdentification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LicenseIdentification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.LicenseIdentification;

        /**
         * Decodes a LicenseIdentification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LicenseIdentification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.LicenseIdentification;

        /**
         * Verifies a LicenseIdentification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LicenseIdentification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LicenseIdentification
         */
        public static fromObject(object: { [k: string]: any }): license_protocol.LicenseIdentification;

        /**
         * Creates a plain object from a LicenseIdentification message. Also converts values to other types if specified.
         * @param message LicenseIdentification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: license_protocol.LicenseIdentification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LicenseIdentification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LicenseIdentification
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a License. */
    interface ILicense {

        /** License id */
        id?: (license_protocol.ILicenseIdentification|null);

        /** License policy */
        policy?: (license_protocol.License.IPolicy|null);

        /** License key */
        key?: (license_protocol.License.IKeyContainer[]|null);

        /** License licenseStartTime */
        licenseStartTime?: (number|Long|null);

        /** License remoteAttestationVerified */
        remoteAttestationVerified?: (boolean|null);

        /** License providerClientToken */
        providerClientToken?: (Uint8Array|null);

        /** License protectionScheme */
        protectionScheme?: (number|null);

        /** License srmRequirement */
        srmRequirement?: (Uint8Array|null);

        /** License srmUpdate */
        srmUpdate?: (Uint8Array|null);

        /** License platformVerificationStatus */
        platformVerificationStatus?: (license_protocol.PlatformVerificationStatus|null);

        /** License groupIds */
        groupIds?: (Uint8Array[]|null);
    }

    /** Represents a License. */
    class License implements ILicense {

        /**
         * Constructs a new License.
         * @param [properties] Properties to set
         */
        constructor(properties?: license_protocol.ILicense);

        /** License id. */
        public id?: (license_protocol.ILicenseIdentification|null);

        /** License policy. */
        public policy?: (license_protocol.License.IPolicy|null);

        /** License key. */
        public key: license_protocol.License.IKeyContainer[];

        /** License licenseStartTime. */
        public licenseStartTime: (number|Long);

        /** License remoteAttestationVerified. */
        public remoteAttestationVerified: boolean;

        /** License providerClientToken. */
        public providerClientToken: Uint8Array;

        /** License protectionScheme. */
        public protectionScheme: number;

        /** License srmRequirement. */
        public srmRequirement: Uint8Array;

        /** License srmUpdate. */
        public srmUpdate: Uint8Array;

        /** License platformVerificationStatus. */
        public platformVerificationStatus: license_protocol.PlatformVerificationStatus;

        /** License groupIds. */
        public groupIds: Uint8Array[];

        /**
         * Creates a new License instance using the specified properties.
         * @param [properties] Properties to set
         * @returns License instance
         */
        public static create(properties?: license_protocol.ILicense): license_protocol.License;

        /**
         * Encodes the specified License message. Does not implicitly {@link license_protocol.License.verify|verify} messages.
         * @param message License message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: license_protocol.ILicense, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified License message, length delimited. Does not implicitly {@link license_protocol.License.verify|verify} messages.
         * @param message License message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: license_protocol.ILicense, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a License message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns License
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.License;

        /**
         * Decodes a License message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns License
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.License;

        /**
         * Verifies a License message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a License message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns License
         */
        public static fromObject(object: { [k: string]: any }): license_protocol.License;

        /**
         * Creates a plain object from a License message. Also converts values to other types if specified.
         * @param message License
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: license_protocol.License, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this License to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for License
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace License {

        /** Properties of a Policy. */
        interface IPolicy {

            /** Policy canPlay */
            canPlay?: (boolean|null);

            /** Policy canPersist */
            canPersist?: (boolean|null);

            /** Policy canRenew */
            canRenew?: (boolean|null);

            /** Policy rentalDurationSeconds */
            rentalDurationSeconds?: (number|Long|null);

            /** Policy playbackDurationSeconds */
            playbackDurationSeconds?: (number|Long|null);

            /** Policy licenseDurationSeconds */
            licenseDurationSeconds?: (number|Long|null);

            /** Policy renewalRecoveryDurationSeconds */
            renewalRecoveryDurationSeconds?: (number|Long|null);

            /** Policy renewalServerUrl */
            renewalServerUrl?: (string|null);

            /** Policy renewalDelaySeconds */
            renewalDelaySeconds?: (number|Long|null);

            /** Policy renewalRetryIntervalSeconds */
            renewalRetryIntervalSeconds?: (number|Long|null);

            /** Policy renewWithUsage */
            renewWithUsage?: (boolean|null);

            /** Policy alwaysIncludeClientId */
            alwaysIncludeClientId?: (boolean|null);

            /** Policy playStartGracePeriodSeconds */
            playStartGracePeriodSeconds?: (number|Long|null);

            /** Policy softEnforcePlaybackDuration */
            softEnforcePlaybackDuration?: (boolean|null);

            /** Policy softEnforceRentalDuration */
            softEnforceRentalDuration?: (boolean|null);
        }

        /** Represents a Policy. */
        class Policy implements IPolicy {

            /**
             * Constructs a new Policy.
             * @param [properties] Properties to set
             */
            constructor(properties?: license_protocol.License.IPolicy);

            /** Policy canPlay. */
            public canPlay: boolean;

            /** Policy canPersist. */
            public canPersist: boolean;

            /** Policy canRenew. */
            public canRenew: boolean;

            /** Policy rentalDurationSeconds. */
            public rentalDurationSeconds: (number|Long);

            /** Policy playbackDurationSeconds. */
            public playbackDurationSeconds: (number|Long);

            /** Policy licenseDurationSeconds. */
            public licenseDurationSeconds: (number|Long);

            /** Policy renewalRecoveryDurationSeconds. */
            public renewalRecoveryDurationSeconds: (number|Long);

            /** Policy renewalServerUrl. */
            public renewalServerUrl: string;

            /** Policy renewalDelaySeconds. */
            public renewalDelaySeconds: (number|Long);

            /** Policy renewalRetryIntervalSeconds. */
            public renewalRetryIntervalSeconds: (number|Long);

            /** Policy renewWithUsage. */
            public renewWithUsage: boolean;

            /** Policy alwaysIncludeClientId. */
            public alwaysIncludeClientId: boolean;

            /** Policy playStartGracePeriodSeconds. */
            public playStartGracePeriodSeconds: (number|Long);

            /** Policy softEnforcePlaybackDuration. */
            public softEnforcePlaybackDuration: boolean;

            /** Policy softEnforceRentalDuration. */
            public softEnforceRentalDuration: boolean;

            /**
             * Creates a new Policy instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Policy instance
             */
            public static create(properties?: license_protocol.License.IPolicy): license_protocol.License.Policy;

            /**
             * Encodes the specified Policy message. Does not implicitly {@link license_protocol.License.Policy.verify|verify} messages.
             * @param message Policy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: license_protocol.License.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Policy message, length delimited. Does not implicitly {@link license_protocol.License.Policy.verify|verify} messages.
             * @param message Policy message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: license_protocol.License.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Policy message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Policy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.License.Policy;

            /**
             * Decodes a Policy message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Policy
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.License.Policy;

            /**
             * Verifies a Policy message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Policy message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Policy
             */
            public static fromObject(object: { [k: string]: any }): license_protocol.License.Policy;

            /**
             * Creates a plain object from a Policy message. Also converts values to other types if specified.
             * @param message Policy
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: license_protocol.License.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Policy to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Policy
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a KeyContainer. */
        interface IKeyContainer {

            /** KeyContainer id */
            id?: (Uint8Array|null);

            /** KeyContainer iv */
            iv?: (Uint8Array|null);

            /** KeyContainer key */
            key?: (Uint8Array|null);

            /** KeyContainer type */
            type?: (license_protocol.License.KeyContainer.KeyType|null);

            /** KeyContainer level */
            level?: (license_protocol.License.KeyContainer.SecurityLevel|null);

            /** KeyContainer requiredProtection */
            requiredProtection?: (license_protocol.License.KeyContainer.IOutputProtection|null);

            /** KeyContainer requestedProtection */
            requestedProtection?: (license_protocol.License.KeyContainer.IOutputProtection|null);

            /** KeyContainer keyControl */
            keyControl?: (license_protocol.License.KeyContainer.IKeyControl|null);

            /** KeyContainer operatorSessionKeyPermissions */
            operatorSessionKeyPermissions?: (license_protocol.License.KeyContainer.IOperatorSessionKeyPermissions|null);

            /** KeyContainer videoResolutionConstraints */
            videoResolutionConstraints?: (license_protocol.License.KeyContainer.IVideoResolutionConstraint[]|null);

            /** KeyContainer antiRollbackUsageTable */
            antiRollbackUsageTable?: (boolean|null);

            /** KeyContainer trackLabel */
            trackLabel?: (string|null);
        }

        /** Represents a KeyContainer. */
        class KeyContainer implements IKeyContainer {

            /**
             * Constructs a new KeyContainer.
             * @param [properties] Properties to set
             */
            constructor(properties?: license_protocol.License.IKeyContainer);

            /** KeyContainer id. */
            public id: Uint8Array;

            /** KeyContainer iv. */
            public iv: Uint8Array;

            /** KeyContainer key. */
            public key: Uint8Array;

            /** KeyContainer type. */
            public type: license_protocol.License.KeyContainer.KeyType;

            /** KeyContainer level. */
            public level: license_protocol.License.KeyContainer.SecurityLevel;

            /** KeyContainer requiredProtection. */
            public requiredProtection?: (license_protocol.License.KeyContainer.IOutputProtection|null);

            /** KeyContainer requestedProtection. */
            public requestedProtection?: (license_protocol.License.KeyContainer.IOutputProtection|null);

            /** KeyContainer keyControl. */
            public keyControl?: (license_protocol.License.KeyContainer.IKeyControl|null);

            /** KeyContainer operatorSessionKeyPermissions. */
            public operatorSessionKeyPermissions?: (license_protocol.License.KeyContainer.IOperatorSessionKeyPermissions|null);

            /** KeyContainer videoResolutionConstraints. */
            public videoResolutionConstraints: license_protocol.License.KeyContainer.IVideoResolutionConstraint[];

            /** KeyContainer antiRollbackUsageTable. */
            public antiRollbackUsageTable: boolean;

            /** KeyContainer trackLabel. */
            public trackLabel: string;

            /**
             * Creates a new KeyContainer instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KeyContainer instance
             */
            public static create(properties?: license_protocol.License.IKeyContainer): license_protocol.License.KeyContainer;

            /**
             * Encodes the specified KeyContainer message. Does not implicitly {@link license_protocol.License.KeyContainer.verify|verify} messages.
             * @param message KeyContainer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: license_protocol.License.IKeyContainer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KeyContainer message, length delimited. Does not implicitly {@link license_protocol.License.KeyContainer.verify|verify} messages.
             * @param message KeyContainer message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: license_protocol.License.IKeyContainer, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KeyContainer message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KeyContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.License.KeyContainer;

            /**
             * Decodes a KeyContainer message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KeyContainer
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.License.KeyContainer;

            /**
             * Verifies a KeyContainer message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KeyContainer message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KeyContainer
             */
            public static fromObject(object: { [k: string]: any }): license_protocol.License.KeyContainer;

            /**
             * Creates a plain object from a KeyContainer message. Also converts values to other types if specified.
             * @param message KeyContainer
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: license_protocol.License.KeyContainer, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KeyContainer to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KeyContainer
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace KeyContainer {

            /** KeyType enum. */
            enum KeyType {
                SIGNING = 1,
                CONTENT = 2,
                KEY_CONTROL = 3,
                OPERATOR_SESSION = 4,
                ENTITLEMENT = 5,
                OEM_CONTENT = 6
            }

            /** SecurityLevel enum. */
            enum SecurityLevel {
                SW_SECURE_CRYPTO = 1,
                SW_SECURE_DECODE = 2,
                HW_SECURE_CRYPTO = 3,
                HW_SECURE_DECODE = 4,
                HW_SECURE_ALL = 5
            }

            /** Properties of a KeyControl. */
            interface IKeyControl {

                /** KeyControl keyControlBlock */
                keyControlBlock?: (Uint8Array|null);

                /** KeyControl iv */
                iv?: (Uint8Array|null);
            }

            /** Represents a KeyControl. */
            class KeyControl implements IKeyControl {

                /**
                 * Constructs a new KeyControl.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: license_protocol.License.KeyContainer.IKeyControl);

                /** KeyControl keyControlBlock. */
                public keyControlBlock: Uint8Array;

                /** KeyControl iv. */
                public iv: Uint8Array;

                /**
                 * Creates a new KeyControl instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns KeyControl instance
                 */
                public static create(properties?: license_protocol.License.KeyContainer.IKeyControl): license_protocol.License.KeyContainer.KeyControl;

                /**
                 * Encodes the specified KeyControl message. Does not implicitly {@link license_protocol.License.KeyContainer.KeyControl.verify|verify} messages.
                 * @param message KeyControl message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: license_protocol.License.KeyContainer.IKeyControl, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified KeyControl message, length delimited. Does not implicitly {@link license_protocol.License.KeyContainer.KeyControl.verify|verify} messages.
                 * @param message KeyControl message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: license_protocol.License.KeyContainer.IKeyControl, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a KeyControl message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns KeyControl
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.License.KeyContainer.KeyControl;

                /**
                 * Decodes a KeyControl message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns KeyControl
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.License.KeyContainer.KeyControl;

                /**
                 * Verifies a KeyControl message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a KeyControl message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns KeyControl
                 */
                public static fromObject(object: { [k: string]: any }): license_protocol.License.KeyContainer.KeyControl;

                /**
                 * Creates a plain object from a KeyControl message. Also converts values to other types if specified.
                 * @param message KeyControl
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: license_protocol.License.KeyContainer.KeyControl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this KeyControl to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for KeyControl
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OutputProtection. */
            interface IOutputProtection {

                /** OutputProtection hdcp */
                hdcp?: (license_protocol.License.KeyContainer.OutputProtection.HDCP|null);

                /** OutputProtection cgmsFlags */
                cgmsFlags?: (license_protocol.License.KeyContainer.OutputProtection.CGMS|null);

                /** OutputProtection hdcpSrmRule */
                hdcpSrmRule?: (license_protocol.License.KeyContainer.OutputProtection.HdcpSrmRule|null);

                /** OutputProtection disableAnalogOutput */
                disableAnalogOutput?: (boolean|null);

                /** OutputProtection disableDigitalOutput */
                disableDigitalOutput?: (boolean|null);
            }

            /** Represents an OutputProtection. */
            class OutputProtection implements IOutputProtection {

                /**
                 * Constructs a new OutputProtection.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: license_protocol.License.KeyContainer.IOutputProtection);

                /** OutputProtection hdcp. */
                public hdcp: license_protocol.License.KeyContainer.OutputProtection.HDCP;

                /** OutputProtection cgmsFlags. */
                public cgmsFlags: license_protocol.License.KeyContainer.OutputProtection.CGMS;

                /** OutputProtection hdcpSrmRule. */
                public hdcpSrmRule: license_protocol.License.KeyContainer.OutputProtection.HdcpSrmRule;

                /** OutputProtection disableAnalogOutput. */
                public disableAnalogOutput: boolean;

                /** OutputProtection disableDigitalOutput. */
                public disableDigitalOutput: boolean;

                /**
                 * Creates a new OutputProtection instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OutputProtection instance
                 */
                public static create(properties?: license_protocol.License.KeyContainer.IOutputProtection): license_protocol.License.KeyContainer.OutputProtection;

                /**
                 * Encodes the specified OutputProtection message. Does not implicitly {@link license_protocol.License.KeyContainer.OutputProtection.verify|verify} messages.
                 * @param message OutputProtection message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: license_protocol.License.KeyContainer.IOutputProtection, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OutputProtection message, length delimited. Does not implicitly {@link license_protocol.License.KeyContainer.OutputProtection.verify|verify} messages.
                 * @param message OutputProtection message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: license_protocol.License.KeyContainer.IOutputProtection, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OutputProtection message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OutputProtection
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.License.KeyContainer.OutputProtection;

                /**
                 * Decodes an OutputProtection message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OutputProtection
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.License.KeyContainer.OutputProtection;

                /**
                 * Verifies an OutputProtection message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OutputProtection message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OutputProtection
                 */
                public static fromObject(object: { [k: string]: any }): license_protocol.License.KeyContainer.OutputProtection;

                /**
                 * Creates a plain object from an OutputProtection message. Also converts values to other types if specified.
                 * @param message OutputProtection
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: license_protocol.License.KeyContainer.OutputProtection, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OutputProtection to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OutputProtection
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace OutputProtection {

                /** HDCP enum. */
                enum HDCP {
                    HDCP_NONE = 0,
                    HDCP_V1 = 1,
                    HDCP_V2 = 2,
                    HDCP_V2_1 = 3,
                    HDCP_V2_2 = 4,
                    HDCP_V2_3 = 5,
                    HDCP_NO_DIGITAL_OUTPUT = 255
                }

                /** CGMS enum. */
                enum CGMS {
                    CGMS_NONE = 42,
                    COPY_FREE = 0,
                    COPY_ONCE = 2,
                    COPY_NEVER = 3
                }

                /** HdcpSrmRule enum. */
                enum HdcpSrmRule {
                    HDCP_SRM_RULE_NONE = 0,
                    CURRENT_SRM = 1
                }
            }

            /** Properties of a VideoResolutionConstraint. */
            interface IVideoResolutionConstraint {

                /** VideoResolutionConstraint minResolutionPixels */
                minResolutionPixels?: (number|null);

                /** VideoResolutionConstraint maxResolutionPixels */
                maxResolutionPixels?: (number|null);

                /** VideoResolutionConstraint requiredProtection */
                requiredProtection?: (license_protocol.License.KeyContainer.IOutputProtection|null);
            }

            /** Represents a VideoResolutionConstraint. */
            class VideoResolutionConstraint implements IVideoResolutionConstraint {

                /**
                 * Constructs a new VideoResolutionConstraint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: license_protocol.License.KeyContainer.IVideoResolutionConstraint);

                /** VideoResolutionConstraint minResolutionPixels. */
                public minResolutionPixels: number;

                /** VideoResolutionConstraint maxResolutionPixels. */
                public maxResolutionPixels: number;

                /** VideoResolutionConstraint requiredProtection. */
                public requiredProtection?: (license_protocol.License.KeyContainer.IOutputProtection|null);

                /**
                 * Creates a new VideoResolutionConstraint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VideoResolutionConstraint instance
                 */
                public static create(properties?: license_protocol.License.KeyContainer.IVideoResolutionConstraint): license_protocol.License.KeyContainer.VideoResolutionConstraint;

                /**
                 * Encodes the specified VideoResolutionConstraint message. Does not implicitly {@link license_protocol.License.KeyContainer.VideoResolutionConstraint.verify|verify} messages.
                 * @param message VideoResolutionConstraint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: license_protocol.License.KeyContainer.IVideoResolutionConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VideoResolutionConstraint message, length delimited. Does not implicitly {@link license_protocol.License.KeyContainer.VideoResolutionConstraint.verify|verify} messages.
                 * @param message VideoResolutionConstraint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: license_protocol.License.KeyContainer.IVideoResolutionConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VideoResolutionConstraint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VideoResolutionConstraint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.License.KeyContainer.VideoResolutionConstraint;

                /**
                 * Decodes a VideoResolutionConstraint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VideoResolutionConstraint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.License.KeyContainer.VideoResolutionConstraint;

                /**
                 * Verifies a VideoResolutionConstraint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VideoResolutionConstraint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VideoResolutionConstraint
                 */
                public static fromObject(object: { [k: string]: any }): license_protocol.License.KeyContainer.VideoResolutionConstraint;

                /**
                 * Creates a plain object from a VideoResolutionConstraint message. Also converts values to other types if specified.
                 * @param message VideoResolutionConstraint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: license_protocol.License.KeyContainer.VideoResolutionConstraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VideoResolutionConstraint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VideoResolutionConstraint
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an OperatorSessionKeyPermissions. */
            interface IOperatorSessionKeyPermissions {

                /** OperatorSessionKeyPermissions allowEncrypt */
                allowEncrypt?: (boolean|null);

                /** OperatorSessionKeyPermissions allowDecrypt */
                allowDecrypt?: (boolean|null);

                /** OperatorSessionKeyPermissions allowSign */
                allowSign?: (boolean|null);

                /** OperatorSessionKeyPermissions allowSignatureVerify */
                allowSignatureVerify?: (boolean|null);
            }

            /** Represents an OperatorSessionKeyPermissions. */
            class OperatorSessionKeyPermissions implements IOperatorSessionKeyPermissions {

                /**
                 * Constructs a new OperatorSessionKeyPermissions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: license_protocol.License.KeyContainer.IOperatorSessionKeyPermissions);

                /** OperatorSessionKeyPermissions allowEncrypt. */
                public allowEncrypt: boolean;

                /** OperatorSessionKeyPermissions allowDecrypt. */
                public allowDecrypt: boolean;

                /** OperatorSessionKeyPermissions allowSign. */
                public allowSign: boolean;

                /** OperatorSessionKeyPermissions allowSignatureVerify. */
                public allowSignatureVerify: boolean;

                /**
                 * Creates a new OperatorSessionKeyPermissions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns OperatorSessionKeyPermissions instance
                 */
                public static create(properties?: license_protocol.License.KeyContainer.IOperatorSessionKeyPermissions): license_protocol.License.KeyContainer.OperatorSessionKeyPermissions;

                /**
                 * Encodes the specified OperatorSessionKeyPermissions message. Does not implicitly {@link license_protocol.License.KeyContainer.OperatorSessionKeyPermissions.verify|verify} messages.
                 * @param message OperatorSessionKeyPermissions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: license_protocol.License.KeyContainer.IOperatorSessionKeyPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified OperatorSessionKeyPermissions message, length delimited. Does not implicitly {@link license_protocol.License.KeyContainer.OperatorSessionKeyPermissions.verify|verify} messages.
                 * @param message OperatorSessionKeyPermissions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: license_protocol.License.KeyContainer.IOperatorSessionKeyPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an OperatorSessionKeyPermissions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns OperatorSessionKeyPermissions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.License.KeyContainer.OperatorSessionKeyPermissions;

                /**
                 * Decodes an OperatorSessionKeyPermissions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns OperatorSessionKeyPermissions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.License.KeyContainer.OperatorSessionKeyPermissions;

                /**
                 * Verifies an OperatorSessionKeyPermissions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an OperatorSessionKeyPermissions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns OperatorSessionKeyPermissions
                 */
                public static fromObject(object: { [k: string]: any }): license_protocol.License.KeyContainer.OperatorSessionKeyPermissions;

                /**
                 * Creates a plain object from an OperatorSessionKeyPermissions message. Also converts values to other types if specified.
                 * @param message OperatorSessionKeyPermissions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: license_protocol.License.KeyContainer.OperatorSessionKeyPermissions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this OperatorSessionKeyPermissions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for OperatorSessionKeyPermissions
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }

    /** ProtocolVersion enum. */
    enum ProtocolVersion {
        VERSION_2_0 = 20,
        VERSION_2_1 = 21,
        VERSION_2_2 = 22
    }

    /** Properties of a LicenseRequest. */
    interface ILicenseRequest {

        /** LicenseRequest clientId */
        clientId?: (license_protocol.IClientIdentification|null);

        /** LicenseRequest contentId */
        contentId?: (license_protocol.LicenseRequest.IContentIdentification|null);

        /** LicenseRequest type */
        type?: (license_protocol.LicenseRequest.RequestType|null);

        /** LicenseRequest requestTime */
        requestTime?: (number|Long|null);

        /** LicenseRequest keyControlNonceDeprecated */
        keyControlNonceDeprecated?: (Uint8Array|null);

        /** LicenseRequest protocolVersion */
        protocolVersion?: (license_protocol.ProtocolVersion|null);

        /** LicenseRequest keyControlNonce */
        keyControlNonce?: (number|null);

        /** LicenseRequest encryptedClientId */
        encryptedClientId?: (license_protocol.IEncryptedClientIdentification|null);
    }

    /** Represents a LicenseRequest. */
    class LicenseRequest implements ILicenseRequest {

        /**
         * Constructs a new LicenseRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: license_protocol.ILicenseRequest);

        /** LicenseRequest clientId. */
        public clientId?: (license_protocol.IClientIdentification|null);

        /** LicenseRequest contentId. */
        public contentId?: (license_protocol.LicenseRequest.IContentIdentification|null);

        /** LicenseRequest type. */
        public type: license_protocol.LicenseRequest.RequestType;

        /** LicenseRequest requestTime. */
        public requestTime: (number|Long);

        /** LicenseRequest keyControlNonceDeprecated. */
        public keyControlNonceDeprecated: Uint8Array;

        /** LicenseRequest protocolVersion. */
        public protocolVersion: license_protocol.ProtocolVersion;

        /** LicenseRequest keyControlNonce. */
        public keyControlNonce: number;

        /** LicenseRequest encryptedClientId. */
        public encryptedClientId?: (license_protocol.IEncryptedClientIdentification|null);

        /**
         * Creates a new LicenseRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LicenseRequest instance
         */
        public static create(properties?: license_protocol.ILicenseRequest): license_protocol.LicenseRequest;

        /**
         * Encodes the specified LicenseRequest message. Does not implicitly {@link license_protocol.LicenseRequest.verify|verify} messages.
         * @param message LicenseRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: license_protocol.ILicenseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LicenseRequest message, length delimited. Does not implicitly {@link license_protocol.LicenseRequest.verify|verify} messages.
         * @param message LicenseRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: license_protocol.ILicenseRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LicenseRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LicenseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.LicenseRequest;

        /**
         * Decodes a LicenseRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LicenseRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.LicenseRequest;

        /**
         * Verifies a LicenseRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LicenseRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LicenseRequest
         */
        public static fromObject(object: { [k: string]: any }): license_protocol.LicenseRequest;

        /**
         * Creates a plain object from a LicenseRequest message. Also converts values to other types if specified.
         * @param message LicenseRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: license_protocol.LicenseRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LicenseRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LicenseRequest
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace LicenseRequest {

        /** Properties of a ContentIdentification. */
        interface IContentIdentification {

            /** ContentIdentification widevinePsshData */
            widevinePsshData?: (license_protocol.LicenseRequest.ContentIdentification.IWidevinePsshData|null);

            /** ContentIdentification webmKeyId */
            webmKeyId?: (license_protocol.LicenseRequest.ContentIdentification.IWebmKeyId|null);

            /** ContentIdentification existingLicense */
            existingLicense?: (license_protocol.LicenseRequest.ContentIdentification.IExistingLicense|null);

            /** ContentIdentification initData */
            initData?: (license_protocol.LicenseRequest.ContentIdentification.IInitData|null);
        }

        /** Represents a ContentIdentification. */
        class ContentIdentification implements IContentIdentification {

            /**
             * Constructs a new ContentIdentification.
             * @param [properties] Properties to set
             */
            constructor(properties?: license_protocol.LicenseRequest.IContentIdentification);

            /** ContentIdentification widevinePsshData. */
            public widevinePsshData?: (license_protocol.LicenseRequest.ContentIdentification.IWidevinePsshData|null);

            /** ContentIdentification webmKeyId. */
            public webmKeyId?: (license_protocol.LicenseRequest.ContentIdentification.IWebmKeyId|null);

            /** ContentIdentification existingLicense. */
            public existingLicense?: (license_protocol.LicenseRequest.ContentIdentification.IExistingLicense|null);

            /** ContentIdentification initData. */
            public initData?: (license_protocol.LicenseRequest.ContentIdentification.IInitData|null);

            /** ContentIdentification contentIdVariant. */
            public contentIdVariant?: ("widevinePsshData"|"webmKeyId"|"existingLicense"|"initData");

            /**
             * Creates a new ContentIdentification instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ContentIdentification instance
             */
            public static create(properties?: license_protocol.LicenseRequest.IContentIdentification): license_protocol.LicenseRequest.ContentIdentification;

            /**
             * Encodes the specified ContentIdentification message. Does not implicitly {@link license_protocol.LicenseRequest.ContentIdentification.verify|verify} messages.
             * @param message ContentIdentification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: license_protocol.LicenseRequest.IContentIdentification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ContentIdentification message, length delimited. Does not implicitly {@link license_protocol.LicenseRequest.ContentIdentification.verify|verify} messages.
             * @param message ContentIdentification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: license_protocol.LicenseRequest.IContentIdentification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ContentIdentification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ContentIdentification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.LicenseRequest.ContentIdentification;

            /**
             * Decodes a ContentIdentification message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ContentIdentification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.LicenseRequest.ContentIdentification;

            /**
             * Verifies a ContentIdentification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ContentIdentification message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ContentIdentification
             */
            public static fromObject(object: { [k: string]: any }): license_protocol.LicenseRequest.ContentIdentification;

            /**
             * Creates a plain object from a ContentIdentification message. Also converts values to other types if specified.
             * @param message ContentIdentification
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: license_protocol.LicenseRequest.ContentIdentification, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ContentIdentification to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ContentIdentification
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ContentIdentification {

            /** Properties of a WidevinePsshData. */
            interface IWidevinePsshData {

                /** WidevinePsshData psshData */
                psshData?: (Uint8Array[]|null);

                /** WidevinePsshData licenseType */
                licenseType?: (license_protocol.LicenseType|null);

                /** WidevinePsshData requestId */
                requestId?: (Uint8Array|null);
            }

            /** Represents a WidevinePsshData. */
            class WidevinePsshData implements IWidevinePsshData {

                /**
                 * Constructs a new WidevinePsshData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: license_protocol.LicenseRequest.ContentIdentification.IWidevinePsshData);

                /** WidevinePsshData psshData. */
                public psshData: Uint8Array[];

                /** WidevinePsshData licenseType. */
                public licenseType: license_protocol.LicenseType;

                /** WidevinePsshData requestId. */
                public requestId: Uint8Array;

                /**
                 * Creates a new WidevinePsshData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WidevinePsshData instance
                 */
                public static create(properties?: license_protocol.LicenseRequest.ContentIdentification.IWidevinePsshData): license_protocol.LicenseRequest.ContentIdentification.WidevinePsshData;

                /**
                 * Encodes the specified WidevinePsshData message. Does not implicitly {@link license_protocol.LicenseRequest.ContentIdentification.WidevinePsshData.verify|verify} messages.
                 * @param message WidevinePsshData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: license_protocol.LicenseRequest.ContentIdentification.IWidevinePsshData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WidevinePsshData message, length delimited. Does not implicitly {@link license_protocol.LicenseRequest.ContentIdentification.WidevinePsshData.verify|verify} messages.
                 * @param message WidevinePsshData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: license_protocol.LicenseRequest.ContentIdentification.IWidevinePsshData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WidevinePsshData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WidevinePsshData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.LicenseRequest.ContentIdentification.WidevinePsshData;

                /**
                 * Decodes a WidevinePsshData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WidevinePsshData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.LicenseRequest.ContentIdentification.WidevinePsshData;

                /**
                 * Verifies a WidevinePsshData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WidevinePsshData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WidevinePsshData
                 */
                public static fromObject(object: { [k: string]: any }): license_protocol.LicenseRequest.ContentIdentification.WidevinePsshData;

                /**
                 * Creates a plain object from a WidevinePsshData message. Also converts values to other types if specified.
                 * @param message WidevinePsshData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: license_protocol.LicenseRequest.ContentIdentification.WidevinePsshData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WidevinePsshData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WidevinePsshData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a WebmKeyId. */
            interface IWebmKeyId {

                /** WebmKeyId header */
                header?: (Uint8Array|null);

                /** WebmKeyId licenseType */
                licenseType?: (license_protocol.LicenseType|null);

                /** WebmKeyId requestId */
                requestId?: (Uint8Array|null);
            }

            /** Represents a WebmKeyId. */
            class WebmKeyId implements IWebmKeyId {

                /**
                 * Constructs a new WebmKeyId.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: license_protocol.LicenseRequest.ContentIdentification.IWebmKeyId);

                /** WebmKeyId header. */
                public header: Uint8Array;

                /** WebmKeyId licenseType. */
                public licenseType: license_protocol.LicenseType;

                /** WebmKeyId requestId. */
                public requestId: Uint8Array;

                /**
                 * Creates a new WebmKeyId instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns WebmKeyId instance
                 */
                public static create(properties?: license_protocol.LicenseRequest.ContentIdentification.IWebmKeyId): license_protocol.LicenseRequest.ContentIdentification.WebmKeyId;

                /**
                 * Encodes the specified WebmKeyId message. Does not implicitly {@link license_protocol.LicenseRequest.ContentIdentification.WebmKeyId.verify|verify} messages.
                 * @param message WebmKeyId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: license_protocol.LicenseRequest.ContentIdentification.IWebmKeyId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified WebmKeyId message, length delimited. Does not implicitly {@link license_protocol.LicenseRequest.ContentIdentification.WebmKeyId.verify|verify} messages.
                 * @param message WebmKeyId message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: license_protocol.LicenseRequest.ContentIdentification.IWebmKeyId, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a WebmKeyId message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns WebmKeyId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.LicenseRequest.ContentIdentification.WebmKeyId;

                /**
                 * Decodes a WebmKeyId message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns WebmKeyId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.LicenseRequest.ContentIdentification.WebmKeyId;

                /**
                 * Verifies a WebmKeyId message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a WebmKeyId message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns WebmKeyId
                 */
                public static fromObject(object: { [k: string]: any }): license_protocol.LicenseRequest.ContentIdentification.WebmKeyId;

                /**
                 * Creates a plain object from a WebmKeyId message. Also converts values to other types if specified.
                 * @param message WebmKeyId
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: license_protocol.LicenseRequest.ContentIdentification.WebmKeyId, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this WebmKeyId to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for WebmKeyId
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an ExistingLicense. */
            interface IExistingLicense {

                /** ExistingLicense licenseId */
                licenseId?: (license_protocol.ILicenseIdentification|null);

                /** ExistingLicense secondsSinceStarted */
                secondsSinceStarted?: (number|Long|null);

                /** ExistingLicense secondsSinceLastPlayed */
                secondsSinceLastPlayed?: (number|Long|null);

                /** ExistingLicense sessionUsageTableEntry */
                sessionUsageTableEntry?: (Uint8Array|null);
            }

            /** Represents an ExistingLicense. */
            class ExistingLicense implements IExistingLicense {

                /**
                 * Constructs a new ExistingLicense.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: license_protocol.LicenseRequest.ContentIdentification.IExistingLicense);

                /** ExistingLicense licenseId. */
                public licenseId?: (license_protocol.ILicenseIdentification|null);

                /** ExistingLicense secondsSinceStarted. */
                public secondsSinceStarted: (number|Long);

                /** ExistingLicense secondsSinceLastPlayed. */
                public secondsSinceLastPlayed: (number|Long);

                /** ExistingLicense sessionUsageTableEntry. */
                public sessionUsageTableEntry: Uint8Array;

                /**
                 * Creates a new ExistingLicense instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExistingLicense instance
                 */
                public static create(properties?: license_protocol.LicenseRequest.ContentIdentification.IExistingLicense): license_protocol.LicenseRequest.ContentIdentification.ExistingLicense;

                /**
                 * Encodes the specified ExistingLicense message. Does not implicitly {@link license_protocol.LicenseRequest.ContentIdentification.ExistingLicense.verify|verify} messages.
                 * @param message ExistingLicense message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: license_protocol.LicenseRequest.ContentIdentification.IExistingLicense, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExistingLicense message, length delimited. Does not implicitly {@link license_protocol.LicenseRequest.ContentIdentification.ExistingLicense.verify|verify} messages.
                 * @param message ExistingLicense message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: license_protocol.LicenseRequest.ContentIdentification.IExistingLicense, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExistingLicense message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExistingLicense
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.LicenseRequest.ContentIdentification.ExistingLicense;

                /**
                 * Decodes an ExistingLicense message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExistingLicense
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.LicenseRequest.ContentIdentification.ExistingLicense;

                /**
                 * Verifies an ExistingLicense message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExistingLicense message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExistingLicense
                 */
                public static fromObject(object: { [k: string]: any }): license_protocol.LicenseRequest.ContentIdentification.ExistingLicense;

                /**
                 * Creates a plain object from an ExistingLicense message. Also converts values to other types if specified.
                 * @param message ExistingLicense
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: license_protocol.LicenseRequest.ContentIdentification.ExistingLicense, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExistingLicense to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExistingLicense
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of an InitData. */
            interface IInitData {

                /** InitData initDataType */
                initDataType?: (license_protocol.LicenseRequest.ContentIdentification.InitData.InitDataType|null);

                /** InitData initData */
                initData?: (Uint8Array|null);

                /** InitData licenseType */
                licenseType?: (license_protocol.LicenseType|null);

                /** InitData requestId */
                requestId?: (Uint8Array|null);
            }

            /** Represents an InitData. */
            class InitData implements IInitData {

                /**
                 * Constructs a new InitData.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: license_protocol.LicenseRequest.ContentIdentification.IInitData);

                /** InitData initDataType. */
                public initDataType: license_protocol.LicenseRequest.ContentIdentification.InitData.InitDataType;

                /** InitData initData. */
                public initData: Uint8Array;

                /** InitData licenseType. */
                public licenseType: license_protocol.LicenseType;

                /** InitData requestId. */
                public requestId: Uint8Array;

                /**
                 * Creates a new InitData instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InitData instance
                 */
                public static create(properties?: license_protocol.LicenseRequest.ContentIdentification.IInitData): license_protocol.LicenseRequest.ContentIdentification.InitData;

                /**
                 * Encodes the specified InitData message. Does not implicitly {@link license_protocol.LicenseRequest.ContentIdentification.InitData.verify|verify} messages.
                 * @param message InitData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: license_protocol.LicenseRequest.ContentIdentification.IInitData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InitData message, length delimited. Does not implicitly {@link license_protocol.LicenseRequest.ContentIdentification.InitData.verify|verify} messages.
                 * @param message InitData message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: license_protocol.LicenseRequest.ContentIdentification.IInitData, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InitData message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InitData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.LicenseRequest.ContentIdentification.InitData;

                /**
                 * Decodes an InitData message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InitData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.LicenseRequest.ContentIdentification.InitData;

                /**
                 * Verifies an InitData message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InitData message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InitData
                 */
                public static fromObject(object: { [k: string]: any }): license_protocol.LicenseRequest.ContentIdentification.InitData;

                /**
                 * Creates a plain object from an InitData message. Also converts values to other types if specified.
                 * @param message InitData
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: license_protocol.LicenseRequest.ContentIdentification.InitData, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InitData to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for InitData
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace InitData {

                /** InitDataType enum. */
                enum InitDataType {
                    CENC = 1,
                    WEBM = 2
                }
            }
        }

        /** RequestType enum. */
        enum RequestType {
            NEW = 1,
            RENEWAL = 2,
            RELEASE = 3
        }
    }

    /** Properties of a MetricData. */
    interface IMetricData {

        /** MetricData stageName */
        stageName?: (string|null);

        /** MetricData metricData */
        metricData?: (license_protocol.MetricData.ITypeValue[]|null);
    }

    /** Represents a MetricData. */
    class MetricData implements IMetricData {

        /**
         * Constructs a new MetricData.
         * @param [properties] Properties to set
         */
        constructor(properties?: license_protocol.IMetricData);

        /** MetricData stageName. */
        public stageName: string;

        /** MetricData metricData. */
        public metricData: license_protocol.MetricData.ITypeValue[];

        /**
         * Creates a new MetricData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MetricData instance
         */
        public static create(properties?: license_protocol.IMetricData): license_protocol.MetricData;

        /**
         * Encodes the specified MetricData message. Does not implicitly {@link license_protocol.MetricData.verify|verify} messages.
         * @param message MetricData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: license_protocol.IMetricData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MetricData message, length delimited. Does not implicitly {@link license_protocol.MetricData.verify|verify} messages.
         * @param message MetricData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: license_protocol.IMetricData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MetricData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MetricData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.MetricData;

        /**
         * Decodes a MetricData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MetricData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.MetricData;

        /**
         * Verifies a MetricData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MetricData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MetricData
         */
        public static fromObject(object: { [k: string]: any }): license_protocol.MetricData;

        /**
         * Creates a plain object from a MetricData message. Also converts values to other types if specified.
         * @param message MetricData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: license_protocol.MetricData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MetricData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for MetricData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace MetricData {

        /** MetricType enum. */
        enum MetricType {
            LATENCY = 1,
            TIMESTAMP = 2
        }

        /** Properties of a TypeValue. */
        interface ITypeValue {

            /** TypeValue type */
            type?: (license_protocol.MetricData.MetricType|null);

            /** TypeValue value */
            value?: (number|Long|null);
        }

        /** Represents a TypeValue. */
        class TypeValue implements ITypeValue {

            /**
             * Constructs a new TypeValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: license_protocol.MetricData.ITypeValue);

            /** TypeValue type. */
            public type: license_protocol.MetricData.MetricType;

            /** TypeValue value. */
            public value: (number|Long);

            /**
             * Creates a new TypeValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TypeValue instance
             */
            public static create(properties?: license_protocol.MetricData.ITypeValue): license_protocol.MetricData.TypeValue;

            /**
             * Encodes the specified TypeValue message. Does not implicitly {@link license_protocol.MetricData.TypeValue.verify|verify} messages.
             * @param message TypeValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: license_protocol.MetricData.ITypeValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TypeValue message, length delimited. Does not implicitly {@link license_protocol.MetricData.TypeValue.verify|verify} messages.
             * @param message TypeValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: license_protocol.MetricData.ITypeValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TypeValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TypeValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.MetricData.TypeValue;

            /**
             * Decodes a TypeValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TypeValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.MetricData.TypeValue;

            /**
             * Verifies a TypeValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TypeValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TypeValue
             */
            public static fromObject(object: { [k: string]: any }): license_protocol.MetricData.TypeValue;

            /**
             * Creates a plain object from a TypeValue message. Also converts values to other types if specified.
             * @param message TypeValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: license_protocol.MetricData.TypeValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TypeValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for TypeValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a VersionInfo. */
    interface IVersionInfo {

        /** VersionInfo licenseSdkVersion */
        licenseSdkVersion?: (string|null);

        /** VersionInfo licenseServiceVersion */
        licenseServiceVersion?: (string|null);
    }

    /** Represents a VersionInfo. */
    class VersionInfo implements IVersionInfo {

        /**
         * Constructs a new VersionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: license_protocol.IVersionInfo);

        /** VersionInfo licenseSdkVersion. */
        public licenseSdkVersion: string;

        /** VersionInfo licenseServiceVersion. */
        public licenseServiceVersion: string;

        /**
         * Creates a new VersionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionInfo instance
         */
        public static create(properties?: license_protocol.IVersionInfo): license_protocol.VersionInfo;

        /**
         * Encodes the specified VersionInfo message. Does not implicitly {@link license_protocol.VersionInfo.verify|verify} messages.
         * @param message VersionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: license_protocol.IVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionInfo message, length delimited. Does not implicitly {@link license_protocol.VersionInfo.verify|verify} messages.
         * @param message VersionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: license_protocol.IVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.VersionInfo;

        /**
         * Decodes a VersionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.VersionInfo;

        /**
         * Verifies a VersionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionInfo
         */
        public static fromObject(object: { [k: string]: any }): license_protocol.VersionInfo;

        /**
         * Creates a plain object from a VersionInfo message. Also converts values to other types if specified.
         * @param message VersionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: license_protocol.VersionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for VersionInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SignedMessage. */
    interface ISignedMessage {

        /** SignedMessage type */
        type?: (license_protocol.SignedMessage.MessageType|null);

        /** SignedMessage msg */
        msg?: (Uint8Array|null);

        /** SignedMessage signature */
        signature?: (Uint8Array|null);

        /** SignedMessage sessionKey */
        sessionKey?: (Uint8Array|null);

        /** SignedMessage remoteAttestation */
        remoteAttestation?: (Uint8Array|null);

        /** SignedMessage metricData */
        metricData?: (license_protocol.IMetricData[]|null);

        /** SignedMessage serviceVersionInfo */
        serviceVersionInfo?: (license_protocol.IVersionInfo|null);

        /** SignedMessage sessionKeyType */
        sessionKeyType?: (license_protocol.SignedMessage.SessionKeyType|null);

        /** SignedMessage oemcryptoCoreMessage */
        oemcryptoCoreMessage?: (Uint8Array|null);
    }

    /** Represents a SignedMessage. */
    class SignedMessage implements ISignedMessage {

        /**
         * Constructs a new SignedMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: license_protocol.ISignedMessage);

        /** SignedMessage type. */
        public type: license_protocol.SignedMessage.MessageType;

        /** SignedMessage msg. */
        public msg: Uint8Array;

        /** SignedMessage signature. */
        public signature: Uint8Array;

        /** SignedMessage sessionKey. */
        public sessionKey: Uint8Array;

        /** SignedMessage remoteAttestation. */
        public remoteAttestation: Uint8Array;

        /** SignedMessage metricData. */
        public metricData: license_protocol.IMetricData[];

        /** SignedMessage serviceVersionInfo. */
        public serviceVersionInfo?: (license_protocol.IVersionInfo|null);

        /** SignedMessage sessionKeyType. */
        public sessionKeyType: license_protocol.SignedMessage.SessionKeyType;

        /** SignedMessage oemcryptoCoreMessage. */
        public oemcryptoCoreMessage: Uint8Array;

        /**
         * Creates a new SignedMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignedMessage instance
         */
        public static create(properties?: license_protocol.ISignedMessage): license_protocol.SignedMessage;

        /**
         * Encodes the specified SignedMessage message. Does not implicitly {@link license_protocol.SignedMessage.verify|verify} messages.
         * @param message SignedMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: license_protocol.ISignedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignedMessage message, length delimited. Does not implicitly {@link license_protocol.SignedMessage.verify|verify} messages.
         * @param message SignedMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: license_protocol.ISignedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.SignedMessage;

        /**
         * Decodes a SignedMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignedMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.SignedMessage;

        /**
         * Verifies a SignedMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignedMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignedMessage
         */
        public static fromObject(object: { [k: string]: any }): license_protocol.SignedMessage;

        /**
         * Creates a plain object from a SignedMessage message. Also converts values to other types if specified.
         * @param message SignedMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: license_protocol.SignedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignedMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignedMessage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace SignedMessage {

        /** MessageType enum. */
        enum MessageType {
            LICENSE_REQUEST = 1,
            LICENSE = 2,
            ERROR_RESPONSE = 3,
            SERVICE_CERTIFICATE_REQUEST = 4,
            SERVICE_CERTIFICATE = 5,
            SUB_LICENSE = 6,
            CAS_LICENSE_REQUEST = 7,
            CAS_LICENSE = 8,
            EXTERNAL_LICENSE_REQUEST = 9,
            EXTERNAL_LICENSE = 10
        }

        /** SessionKeyType enum. */
        enum SessionKeyType {
            UNDEFINED = 0,
            WRAPPED_AES_KEY = 1,
            EPHERMERAL_ECC_PUBLIC_KEY = 2
        }
    }

    /** HashAlgorithmProto enum. */
    enum HashAlgorithmProto {
        HASH_ALGORITHM_UNSPECIFIED = 0,
        HASH_ALGORITHM_SHA_1 = 1,
        HASH_ALGORITHM_SHA_256 = 2,
        HASH_ALGORITHM_SHA_384 = 3
    }

    /** Properties of a ClientIdentification. */
    interface IClientIdentification {

        /** ClientIdentification type */
        type?: (license_protocol.ClientIdentification.TokenType|null);

        /** ClientIdentification token */
        token?: (Uint8Array|null);

        /** ClientIdentification clientInfo */
        clientInfo?: (license_protocol.ClientIdentification.INameValue[]|null);

        /** ClientIdentification providerClientToken */
        providerClientToken?: (Uint8Array|null);

        /** ClientIdentification licenseCounter */
        licenseCounter?: (number|null);

        /** ClientIdentification clientCapabilities */
        clientCapabilities?: (license_protocol.ClientIdentification.IClientCapabilities|null);

        /** ClientIdentification vmpData */
        vmpData?: (Uint8Array|null);

        /** ClientIdentification deviceCredentials */
        deviceCredentials?: (license_protocol.ClientIdentification.IClientCredentials[]|null);
    }

    /** Represents a ClientIdentification. */
    class ClientIdentification implements IClientIdentification {

        /**
         * Constructs a new ClientIdentification.
         * @param [properties] Properties to set
         */
        constructor(properties?: license_protocol.IClientIdentification);

        /** ClientIdentification type. */
        public type: license_protocol.ClientIdentification.TokenType;

        /** ClientIdentification token. */
        public token: Uint8Array;

        /** ClientIdentification clientInfo. */
        public clientInfo: license_protocol.ClientIdentification.INameValue[];

        /** ClientIdentification providerClientToken. */
        public providerClientToken: Uint8Array;

        /** ClientIdentification licenseCounter. */
        public licenseCounter: number;

        /** ClientIdentification clientCapabilities. */
        public clientCapabilities?: (license_protocol.ClientIdentification.IClientCapabilities|null);

        /** ClientIdentification vmpData. */
        public vmpData: Uint8Array;

        /** ClientIdentification deviceCredentials. */
        public deviceCredentials: license_protocol.ClientIdentification.IClientCredentials[];

        /**
         * Creates a new ClientIdentification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClientIdentification instance
         */
        public static create(properties?: license_protocol.IClientIdentification): license_protocol.ClientIdentification;

        /**
         * Encodes the specified ClientIdentification message. Does not implicitly {@link license_protocol.ClientIdentification.verify|verify} messages.
         * @param message ClientIdentification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: license_protocol.IClientIdentification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClientIdentification message, length delimited. Does not implicitly {@link license_protocol.ClientIdentification.verify|verify} messages.
         * @param message ClientIdentification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: license_protocol.IClientIdentification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClientIdentification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClientIdentification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.ClientIdentification;

        /**
         * Decodes a ClientIdentification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClientIdentification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.ClientIdentification;

        /**
         * Verifies a ClientIdentification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClientIdentification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClientIdentification
         */
        public static fromObject(object: { [k: string]: any }): license_protocol.ClientIdentification;

        /**
         * Creates a plain object from a ClientIdentification message. Also converts values to other types if specified.
         * @param message ClientIdentification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: license_protocol.ClientIdentification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClientIdentification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ClientIdentification
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace ClientIdentification {

        /** TokenType enum. */
        enum TokenType {
            KEYBOX = 0,
            DRM_DEVICE_CERTIFICATE = 1,
            REMOTE_ATTESTATION_CERTIFICATE = 2,
            OEM_DEVICE_CERTIFICATE = 3
        }

        /** Properties of a NameValue. */
        interface INameValue {

            /** NameValue name */
            name?: (string|null);

            /** NameValue value */
            value?: (string|null);
        }

        /** Represents a NameValue. */
        class NameValue implements INameValue {

            /**
             * Constructs a new NameValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: license_protocol.ClientIdentification.INameValue);

            /** NameValue name. */
            public name: string;

            /** NameValue value. */
            public value: string;

            /**
             * Creates a new NameValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NameValue instance
             */
            public static create(properties?: license_protocol.ClientIdentification.INameValue): license_protocol.ClientIdentification.NameValue;

            /**
             * Encodes the specified NameValue message. Does not implicitly {@link license_protocol.ClientIdentification.NameValue.verify|verify} messages.
             * @param message NameValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: license_protocol.ClientIdentification.INameValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NameValue message, length delimited. Does not implicitly {@link license_protocol.ClientIdentification.NameValue.verify|verify} messages.
             * @param message NameValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: license_protocol.ClientIdentification.INameValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NameValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NameValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.ClientIdentification.NameValue;

            /**
             * Decodes a NameValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NameValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.ClientIdentification.NameValue;

            /**
             * Verifies a NameValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NameValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NameValue
             */
            public static fromObject(object: { [k: string]: any }): license_protocol.ClientIdentification.NameValue;

            /**
             * Creates a plain object from a NameValue message. Also converts values to other types if specified.
             * @param message NameValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: license_protocol.ClientIdentification.NameValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NameValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NameValue
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientCapabilities. */
        interface IClientCapabilities {

            /** ClientCapabilities clientToken */
            clientToken?: (boolean|null);

            /** ClientCapabilities sessionToken */
            sessionToken?: (boolean|null);

            /** ClientCapabilities videoResolutionConstraints */
            videoResolutionConstraints?: (boolean|null);

            /** ClientCapabilities maxHdcpVersion */
            maxHdcpVersion?: (license_protocol.ClientIdentification.ClientCapabilities.HdcpVersion|null);

            /** ClientCapabilities oemCryptoApiVersion */
            oemCryptoApiVersion?: (number|null);

            /** ClientCapabilities antiRollbackUsageTable */
            antiRollbackUsageTable?: (boolean|null);

            /** ClientCapabilities srmVersion */
            srmVersion?: (number|null);

            /** ClientCapabilities canUpdateSrm */
            canUpdateSrm?: (boolean|null);

            /** ClientCapabilities supportedCertificateKeyType */
            supportedCertificateKeyType?: (license_protocol.ClientIdentification.ClientCapabilities.CertificateKeyType[]|null);

            /** ClientCapabilities analogOutputCapabilities */
            analogOutputCapabilities?: (license_protocol.ClientIdentification.ClientCapabilities.AnalogOutputCapabilities|null);

            /** ClientCapabilities canDisableAnalogOutput */
            canDisableAnalogOutput?: (boolean|null);

            /** ClientCapabilities resourceRatingTier */
            resourceRatingTier?: (number|null);
        }

        /** Represents a ClientCapabilities. */
        class ClientCapabilities implements IClientCapabilities {

            /**
             * Constructs a new ClientCapabilities.
             * @param [properties] Properties to set
             */
            constructor(properties?: license_protocol.ClientIdentification.IClientCapabilities);

            /** ClientCapabilities clientToken. */
            public clientToken: boolean;

            /** ClientCapabilities sessionToken. */
            public sessionToken: boolean;

            /** ClientCapabilities videoResolutionConstraints. */
            public videoResolutionConstraints: boolean;

            /** ClientCapabilities maxHdcpVersion. */
            public maxHdcpVersion: license_protocol.ClientIdentification.ClientCapabilities.HdcpVersion;

            /** ClientCapabilities oemCryptoApiVersion. */
            public oemCryptoApiVersion: number;

            /** ClientCapabilities antiRollbackUsageTable. */
            public antiRollbackUsageTable: boolean;

            /** ClientCapabilities srmVersion. */
            public srmVersion: number;

            /** ClientCapabilities canUpdateSrm. */
            public canUpdateSrm: boolean;

            /** ClientCapabilities supportedCertificateKeyType. */
            public supportedCertificateKeyType: license_protocol.ClientIdentification.ClientCapabilities.CertificateKeyType[];

            /** ClientCapabilities analogOutputCapabilities. */
            public analogOutputCapabilities: license_protocol.ClientIdentification.ClientCapabilities.AnalogOutputCapabilities;

            /** ClientCapabilities canDisableAnalogOutput. */
            public canDisableAnalogOutput: boolean;

            /** ClientCapabilities resourceRatingTier. */
            public resourceRatingTier: number;

            /**
             * Creates a new ClientCapabilities instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientCapabilities instance
             */
            public static create(properties?: license_protocol.ClientIdentification.IClientCapabilities): license_protocol.ClientIdentification.ClientCapabilities;

            /**
             * Encodes the specified ClientCapabilities message. Does not implicitly {@link license_protocol.ClientIdentification.ClientCapabilities.verify|verify} messages.
             * @param message ClientCapabilities message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: license_protocol.ClientIdentification.IClientCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientCapabilities message, length delimited. Does not implicitly {@link license_protocol.ClientIdentification.ClientCapabilities.verify|verify} messages.
             * @param message ClientCapabilities message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: license_protocol.ClientIdentification.IClientCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientCapabilities message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientCapabilities
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.ClientIdentification.ClientCapabilities;

            /**
             * Decodes a ClientCapabilities message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientCapabilities
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.ClientIdentification.ClientCapabilities;

            /**
             * Verifies a ClientCapabilities message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientCapabilities message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientCapabilities
             */
            public static fromObject(object: { [k: string]: any }): license_protocol.ClientIdentification.ClientCapabilities;

            /**
             * Creates a plain object from a ClientCapabilities message. Also converts values to other types if specified.
             * @param message ClientCapabilities
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: license_protocol.ClientIdentification.ClientCapabilities, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientCapabilities to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientCapabilities
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ClientCapabilities {

            /** HdcpVersion enum. */
            enum HdcpVersion {
                HDCP_NONE = 0,
                HDCP_V1 = 1,
                HDCP_V2 = 2,
                HDCP_V2_1 = 3,
                HDCP_V2_2 = 4,
                HDCP_V2_3 = 5,
                HDCP_NO_DIGITAL_OUTPUT = 255
            }

            /** CertificateKeyType enum. */
            enum CertificateKeyType {
                RSA_2048 = 0,
                RSA_3072 = 1,
                ECC_SECP256R1 = 2,
                ECC_SECP384R1 = 3,
                ECC_SECP521R1 = 4
            }

            /** AnalogOutputCapabilities enum. */
            enum AnalogOutputCapabilities {
                ANALOG_OUTPUT_UNKNOWN = 0,
                ANALOG_OUTPUT_NONE = 1,
                ANALOG_OUTPUT_SUPPORTED = 2,
                ANALOG_OUTPUT_SUPPORTS_CGMS_A = 3
            }
        }

        /** Properties of a ClientCredentials. */
        interface IClientCredentials {

            /** ClientCredentials type */
            type?: (license_protocol.ClientIdentification.TokenType|null);

            /** ClientCredentials token */
            token?: (Uint8Array|null);
        }

        /** Represents a ClientCredentials. */
        class ClientCredentials implements IClientCredentials {

            /**
             * Constructs a new ClientCredentials.
             * @param [properties] Properties to set
             */
            constructor(properties?: license_protocol.ClientIdentification.IClientCredentials);

            /** ClientCredentials type. */
            public type: license_protocol.ClientIdentification.TokenType;

            /** ClientCredentials token. */
            public token: Uint8Array;

            /**
             * Creates a new ClientCredentials instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientCredentials instance
             */
            public static create(properties?: license_protocol.ClientIdentification.IClientCredentials): license_protocol.ClientIdentification.ClientCredentials;

            /**
             * Encodes the specified ClientCredentials message. Does not implicitly {@link license_protocol.ClientIdentification.ClientCredentials.verify|verify} messages.
             * @param message ClientCredentials message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: license_protocol.ClientIdentification.IClientCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientCredentials message, length delimited. Does not implicitly {@link license_protocol.ClientIdentification.ClientCredentials.verify|verify} messages.
             * @param message ClientCredentials message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: license_protocol.ClientIdentification.IClientCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientCredentials message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientCredentials
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.ClientIdentification.ClientCredentials;

            /**
             * Decodes a ClientCredentials message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientCredentials
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.ClientIdentification.ClientCredentials;

            /**
             * Verifies a ClientCredentials message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientCredentials message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientCredentials
             */
            public static fromObject(object: { [k: string]: any }): license_protocol.ClientIdentification.ClientCredentials;

            /**
             * Creates a plain object from a ClientCredentials message. Also converts values to other types if specified.
             * @param message ClientCredentials
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: license_protocol.ClientIdentification.ClientCredentials, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientCredentials to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientCredentials
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of an EncryptedClientIdentification. */
    interface IEncryptedClientIdentification {

        /** EncryptedClientIdentification providerId */
        providerId?: (string|null);

        /** EncryptedClientIdentification serviceCertificateSerialNumber */
        serviceCertificateSerialNumber?: (Uint8Array|null);

        /** EncryptedClientIdentification encryptedClientId */
        encryptedClientId?: (Uint8Array|null);

        /** EncryptedClientIdentification encryptedClientIdIv */
        encryptedClientIdIv?: (Uint8Array|null);

        /** EncryptedClientIdentification encryptedPrivacyKey */
        encryptedPrivacyKey?: (Uint8Array|null);
    }

    /** Represents an EncryptedClientIdentification. */
    class EncryptedClientIdentification implements IEncryptedClientIdentification {

        /**
         * Constructs a new EncryptedClientIdentification.
         * @param [properties] Properties to set
         */
        constructor(properties?: license_protocol.IEncryptedClientIdentification);

        /** EncryptedClientIdentification providerId. */
        public providerId: string;

        /** EncryptedClientIdentification serviceCertificateSerialNumber. */
        public serviceCertificateSerialNumber: Uint8Array;

        /** EncryptedClientIdentification encryptedClientId. */
        public encryptedClientId: Uint8Array;

        /** EncryptedClientIdentification encryptedClientIdIv. */
        public encryptedClientIdIv: Uint8Array;

        /** EncryptedClientIdentification encryptedPrivacyKey. */
        public encryptedPrivacyKey: Uint8Array;

        /**
         * Creates a new EncryptedClientIdentification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EncryptedClientIdentification instance
         */
        public static create(properties?: license_protocol.IEncryptedClientIdentification): license_protocol.EncryptedClientIdentification;

        /**
         * Encodes the specified EncryptedClientIdentification message. Does not implicitly {@link license_protocol.EncryptedClientIdentification.verify|verify} messages.
         * @param message EncryptedClientIdentification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: license_protocol.IEncryptedClientIdentification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EncryptedClientIdentification message, length delimited. Does not implicitly {@link license_protocol.EncryptedClientIdentification.verify|verify} messages.
         * @param message EncryptedClientIdentification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: license_protocol.IEncryptedClientIdentification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EncryptedClientIdentification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EncryptedClientIdentification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.EncryptedClientIdentification;

        /**
         * Decodes an EncryptedClientIdentification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EncryptedClientIdentification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.EncryptedClientIdentification;

        /**
         * Verifies an EncryptedClientIdentification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EncryptedClientIdentification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EncryptedClientIdentification
         */
        public static fromObject(object: { [k: string]: any }): license_protocol.EncryptedClientIdentification;

        /**
         * Creates a plain object from an EncryptedClientIdentification message. Also converts values to other types if specified.
         * @param message EncryptedClientIdentification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: license_protocol.EncryptedClientIdentification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EncryptedClientIdentification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EncryptedClientIdentification
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a DrmCertificate. */
    interface IDrmCertificate {

        /** DrmCertificate type */
        type?: (license_protocol.DrmCertificate.Type|null);

        /** DrmCertificate serialNumber */
        serialNumber?: (Uint8Array|null);

        /** DrmCertificate creationTimeSeconds */
        creationTimeSeconds?: (number|null);

        /** DrmCertificate expirationTimeSeconds */
        expirationTimeSeconds?: (number|null);

        /** DrmCertificate publicKey */
        publicKey?: (Uint8Array|null);

        /** DrmCertificate systemId */
        systemId?: (number|null);

        /** DrmCertificate testDeviceDeprecated */
        testDeviceDeprecated?: (boolean|null);

        /** DrmCertificate providerId */
        providerId?: (string|null);

        /** DrmCertificate serviceTypes */
        serviceTypes?: (license_protocol.DrmCertificate.ServiceType[]|null);

        /** DrmCertificate algorithm */
        algorithm?: (license_protocol.DrmCertificate.Algorithm|null);

        /** DrmCertificate rotId */
        rotId?: (Uint8Array|null);

        /** DrmCertificate encryptionKey */
        encryptionKey?: (license_protocol.DrmCertificate.IEncryptionKey|null);
    }

    /** Represents a DrmCertificate. */
    class DrmCertificate implements IDrmCertificate {

        /**
         * Constructs a new DrmCertificate.
         * @param [properties] Properties to set
         */
        constructor(properties?: license_protocol.IDrmCertificate);

        /** DrmCertificate type. */
        public type: license_protocol.DrmCertificate.Type;

        /** DrmCertificate serialNumber. */
        public serialNumber: Uint8Array;

        /** DrmCertificate creationTimeSeconds. */
        public creationTimeSeconds: number;

        /** DrmCertificate expirationTimeSeconds. */
        public expirationTimeSeconds: number;

        /** DrmCertificate publicKey. */
        public publicKey: Uint8Array;

        /** DrmCertificate systemId. */
        public systemId: number;

        /** DrmCertificate testDeviceDeprecated. */
        public testDeviceDeprecated: boolean;

        /** DrmCertificate providerId. */
        public providerId: string;

        /** DrmCertificate serviceTypes. */
        public serviceTypes: license_protocol.DrmCertificate.ServiceType[];

        /** DrmCertificate algorithm. */
        public algorithm: license_protocol.DrmCertificate.Algorithm;

        /** DrmCertificate rotId. */
        public rotId: Uint8Array;

        /** DrmCertificate encryptionKey. */
        public encryptionKey?: (license_protocol.DrmCertificate.IEncryptionKey|null);

        /**
         * Creates a new DrmCertificate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DrmCertificate instance
         */
        public static create(properties?: license_protocol.IDrmCertificate): license_protocol.DrmCertificate;

        /**
         * Encodes the specified DrmCertificate message. Does not implicitly {@link license_protocol.DrmCertificate.verify|verify} messages.
         * @param message DrmCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: license_protocol.IDrmCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DrmCertificate message, length delimited. Does not implicitly {@link license_protocol.DrmCertificate.verify|verify} messages.
         * @param message DrmCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: license_protocol.IDrmCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DrmCertificate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DrmCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.DrmCertificate;

        /**
         * Decodes a DrmCertificate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DrmCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.DrmCertificate;

        /**
         * Verifies a DrmCertificate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DrmCertificate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DrmCertificate
         */
        public static fromObject(object: { [k: string]: any }): license_protocol.DrmCertificate;

        /**
         * Creates a plain object from a DrmCertificate message. Also converts values to other types if specified.
         * @param message DrmCertificate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: license_protocol.DrmCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DrmCertificate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for DrmCertificate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace DrmCertificate {

        /** Type enum. */
        enum Type {
            ROOT = 0,
            DEVICE_MODEL = 1,
            DEVICE = 2,
            SERVICE = 3,
            PROVISIONER = 4
        }

        /** ServiceType enum. */
        enum ServiceType {
            UNKNOWN_SERVICE_TYPE = 0,
            LICENSE_SERVER_SDK = 1,
            LICENSE_SERVER_PROXY_SDK = 2,
            PROVISIONING_SDK = 3,
            CAS_PROXY_SDK = 4
        }

        /** Algorithm enum. */
        enum Algorithm {
            UNKNOWN_ALGORITHM = 0,
            RSA = 1,
            ECC_SECP256R1 = 2,
            ECC_SECP384R1 = 3,
            ECC_SECP521R1 = 4
        }

        /** Properties of an EncryptionKey. */
        interface IEncryptionKey {

            /** EncryptionKey publicKey */
            publicKey?: (Uint8Array|null);

            /** EncryptionKey algorithm */
            algorithm?: (license_protocol.DrmCertificate.Algorithm|null);
        }

        /** Represents an EncryptionKey. */
        class EncryptionKey implements IEncryptionKey {

            /**
             * Constructs a new EncryptionKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: license_protocol.DrmCertificate.IEncryptionKey);

            /** EncryptionKey publicKey. */
            public publicKey: Uint8Array;

            /** EncryptionKey algorithm. */
            public algorithm: license_protocol.DrmCertificate.Algorithm;

            /**
             * Creates a new EncryptionKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EncryptionKey instance
             */
            public static create(properties?: license_protocol.DrmCertificate.IEncryptionKey): license_protocol.DrmCertificate.EncryptionKey;

            /**
             * Encodes the specified EncryptionKey message. Does not implicitly {@link license_protocol.DrmCertificate.EncryptionKey.verify|verify} messages.
             * @param message EncryptionKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: license_protocol.DrmCertificate.IEncryptionKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EncryptionKey message, length delimited. Does not implicitly {@link license_protocol.DrmCertificate.EncryptionKey.verify|verify} messages.
             * @param message EncryptionKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: license_protocol.DrmCertificate.IEncryptionKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EncryptionKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EncryptionKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.DrmCertificate.EncryptionKey;

            /**
             * Decodes an EncryptionKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EncryptionKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.DrmCertificate.EncryptionKey;

            /**
             * Verifies an EncryptionKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EncryptionKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EncryptionKey
             */
            public static fromObject(object: { [k: string]: any }): license_protocol.DrmCertificate.EncryptionKey;

            /**
             * Creates a plain object from an EncryptionKey message. Also converts values to other types if specified.
             * @param message EncryptionKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: license_protocol.DrmCertificate.EncryptionKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EncryptionKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EncryptionKey
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Properties of a SignedDrmCertificate. */
    interface ISignedDrmCertificate {

        /** SignedDrmCertificate drmCertificate */
        drmCertificate?: (Uint8Array|null);

        /** SignedDrmCertificate signature */
        signature?: (Uint8Array|null);

        /** SignedDrmCertificate signer */
        signer?: (license_protocol.ISignedDrmCertificate|null);

        /** SignedDrmCertificate hashAlgorithm */
        hashAlgorithm?: (license_protocol.HashAlgorithmProto|null);
    }

    /** Represents a SignedDrmCertificate. */
    class SignedDrmCertificate implements ISignedDrmCertificate {

        /**
         * Constructs a new SignedDrmCertificate.
         * @param [properties] Properties to set
         */
        constructor(properties?: license_protocol.ISignedDrmCertificate);

        /** SignedDrmCertificate drmCertificate. */
        public drmCertificate: Uint8Array;

        /** SignedDrmCertificate signature. */
        public signature: Uint8Array;

        /** SignedDrmCertificate signer. */
        public signer?: (license_protocol.ISignedDrmCertificate|null);

        /** SignedDrmCertificate hashAlgorithm. */
        public hashAlgorithm: license_protocol.HashAlgorithmProto;

        /**
         * Creates a new SignedDrmCertificate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignedDrmCertificate instance
         */
        public static create(properties?: license_protocol.ISignedDrmCertificate): license_protocol.SignedDrmCertificate;

        /**
         * Encodes the specified SignedDrmCertificate message. Does not implicitly {@link license_protocol.SignedDrmCertificate.verify|verify} messages.
         * @param message SignedDrmCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: license_protocol.ISignedDrmCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignedDrmCertificate message, length delimited. Does not implicitly {@link license_protocol.SignedDrmCertificate.verify|verify} messages.
         * @param message SignedDrmCertificate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: license_protocol.ISignedDrmCertificate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedDrmCertificate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignedDrmCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.SignedDrmCertificate;

        /**
         * Decodes a SignedDrmCertificate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignedDrmCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.SignedDrmCertificate;

        /**
         * Verifies a SignedDrmCertificate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignedDrmCertificate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignedDrmCertificate
         */
        public static fromObject(object: { [k: string]: any }): license_protocol.SignedDrmCertificate;

        /**
         * Creates a plain object from a SignedDrmCertificate message. Also converts values to other types if specified.
         * @param message SignedDrmCertificate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: license_protocol.SignedDrmCertificate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignedDrmCertificate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SignedDrmCertificate
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WidevinePsshData. */
    interface IWidevinePsshData {

        /** WidevinePsshData keyIds */
        keyIds?: (Uint8Array[]|null);

        /** WidevinePsshData contentId */
        contentId?: (Uint8Array|null);

        /** WidevinePsshData cryptoPeriodIndex */
        cryptoPeriodIndex?: (number|null);

        /** WidevinePsshData protectionScheme */
        protectionScheme?: (number|null);

        /** WidevinePsshData cryptoPeriodSeconds */
        cryptoPeriodSeconds?: (number|null);

        /** WidevinePsshData type */
        type?: (license_protocol.WidevinePsshData.Type|null);

        /** WidevinePsshData keySequence */
        keySequence?: (number|null);

        /** WidevinePsshData groupIds */
        groupIds?: (Uint8Array[]|null);

        /** WidevinePsshData entitledKeys */
        entitledKeys?: (license_protocol.WidevinePsshData.IEntitledKey[]|null);

        /** WidevinePsshData videoFeature */
        videoFeature?: (string|null);

        /** WidevinePsshData algorithm */
        algorithm?: (license_protocol.WidevinePsshData.Algorithm|null);

        /** WidevinePsshData provider */
        provider?: (string|null);

        /** WidevinePsshData trackType */
        trackType?: (string|null);

        /** WidevinePsshData policy */
        policy?: (string|null);

        /** WidevinePsshData groupedLicense */
        groupedLicense?: (Uint8Array|null);
    }

    /** Represents a WidevinePsshData. */
    class WidevinePsshData implements IWidevinePsshData {

        /**
         * Constructs a new WidevinePsshData.
         * @param [properties] Properties to set
         */
        constructor(properties?: license_protocol.IWidevinePsshData);

        /** WidevinePsshData keyIds. */
        public keyIds: Uint8Array[];

        /** WidevinePsshData contentId. */
        public contentId: Uint8Array;

        /** WidevinePsshData cryptoPeriodIndex. */
        public cryptoPeriodIndex: number;

        /** WidevinePsshData protectionScheme. */
        public protectionScheme: number;

        /** WidevinePsshData cryptoPeriodSeconds. */
        public cryptoPeriodSeconds: number;

        /** WidevinePsshData type. */
        public type: license_protocol.WidevinePsshData.Type;

        /** WidevinePsshData keySequence. */
        public keySequence: number;

        /** WidevinePsshData groupIds. */
        public groupIds: Uint8Array[];

        /** WidevinePsshData entitledKeys. */
        public entitledKeys: license_protocol.WidevinePsshData.IEntitledKey[];

        /** WidevinePsshData videoFeature. */
        public videoFeature: string;

        /** WidevinePsshData algorithm. */
        public algorithm: license_protocol.WidevinePsshData.Algorithm;

        /** WidevinePsshData provider. */
        public provider: string;

        /** WidevinePsshData trackType. */
        public trackType: string;

        /** WidevinePsshData policy. */
        public policy: string;

        /** WidevinePsshData groupedLicense. */
        public groupedLicense: Uint8Array;

        /**
         * Creates a new WidevinePsshData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WidevinePsshData instance
         */
        public static create(properties?: license_protocol.IWidevinePsshData): license_protocol.WidevinePsshData;

        /**
         * Encodes the specified WidevinePsshData message. Does not implicitly {@link license_protocol.WidevinePsshData.verify|verify} messages.
         * @param message WidevinePsshData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: license_protocol.IWidevinePsshData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WidevinePsshData message, length delimited. Does not implicitly {@link license_protocol.WidevinePsshData.verify|verify} messages.
         * @param message WidevinePsshData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: license_protocol.IWidevinePsshData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WidevinePsshData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WidevinePsshData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.WidevinePsshData;

        /**
         * Decodes a WidevinePsshData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WidevinePsshData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.WidevinePsshData;

        /**
         * Verifies a WidevinePsshData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WidevinePsshData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WidevinePsshData
         */
        public static fromObject(object: { [k: string]: any }): license_protocol.WidevinePsshData;

        /**
         * Creates a plain object from a WidevinePsshData message. Also converts values to other types if specified.
         * @param message WidevinePsshData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: license_protocol.WidevinePsshData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WidevinePsshData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WidevinePsshData
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace WidevinePsshData {

        /** Type enum. */
        enum Type {
            SINGLE = 0,
            ENTITLEMENT = 1,
            ENTITLED_KEY = 2
        }

        /** Properties of an EntitledKey. */
        interface IEntitledKey {

            /** EntitledKey entitlementKeyId */
            entitlementKeyId?: (Uint8Array|null);

            /** EntitledKey keyId */
            keyId?: (Uint8Array|null);

            /** EntitledKey key */
            key?: (Uint8Array|null);

            /** EntitledKey iv */
            iv?: (Uint8Array|null);

            /** EntitledKey entitlementKeySizeBytes */
            entitlementKeySizeBytes?: (number|null);
        }

        /** Represents an EntitledKey. */
        class EntitledKey implements IEntitledKey {

            /**
             * Constructs a new EntitledKey.
             * @param [properties] Properties to set
             */
            constructor(properties?: license_protocol.WidevinePsshData.IEntitledKey);

            /** EntitledKey entitlementKeyId. */
            public entitlementKeyId: Uint8Array;

            /** EntitledKey keyId. */
            public keyId: Uint8Array;

            /** EntitledKey key. */
            public key: Uint8Array;

            /** EntitledKey iv. */
            public iv: Uint8Array;

            /** EntitledKey entitlementKeySizeBytes. */
            public entitlementKeySizeBytes: number;

            /**
             * Creates a new EntitledKey instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EntitledKey instance
             */
            public static create(properties?: license_protocol.WidevinePsshData.IEntitledKey): license_protocol.WidevinePsshData.EntitledKey;

            /**
             * Encodes the specified EntitledKey message. Does not implicitly {@link license_protocol.WidevinePsshData.EntitledKey.verify|verify} messages.
             * @param message EntitledKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: license_protocol.WidevinePsshData.IEntitledKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EntitledKey message, length delimited. Does not implicitly {@link license_protocol.WidevinePsshData.EntitledKey.verify|verify} messages.
             * @param message EntitledKey message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: license_protocol.WidevinePsshData.IEntitledKey, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EntitledKey message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EntitledKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.WidevinePsshData.EntitledKey;

            /**
             * Decodes an EntitledKey message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EntitledKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.WidevinePsshData.EntitledKey;

            /**
             * Verifies an EntitledKey message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EntitledKey message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EntitledKey
             */
            public static fromObject(object: { [k: string]: any }): license_protocol.WidevinePsshData.EntitledKey;

            /**
             * Creates a plain object from an EntitledKey message. Also converts values to other types if specified.
             * @param message EntitledKey
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: license_protocol.WidevinePsshData.EntitledKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EntitledKey to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EntitledKey
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Deprecated Fields  //////////////////////////// */
        enum Algorithm {
            UNENCRYPTED = 0,
            AESCTR = 1
        }
    }

    /** Properties of a FileHashes. */
    interface IFileHashes {

        /** FileHashes signer */
        signer?: (Uint8Array|null);

        /** FileHashes signatures */
        signatures?: (license_protocol.FileHashes.ISignature[]|null);
    }

    /** Represents a FileHashes. */
    class FileHashes implements IFileHashes {

        /**
         * Constructs a new FileHashes.
         * @param [properties] Properties to set
         */
        constructor(properties?: license_protocol.IFileHashes);

        /** FileHashes signer. */
        public signer: Uint8Array;

        /** FileHashes signatures. */
        public signatures: license_protocol.FileHashes.ISignature[];

        /**
         * Creates a new FileHashes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FileHashes instance
         */
        public static create(properties?: license_protocol.IFileHashes): license_protocol.FileHashes;

        /**
         * Encodes the specified FileHashes message. Does not implicitly {@link license_protocol.FileHashes.verify|verify} messages.
         * @param message FileHashes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: license_protocol.IFileHashes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FileHashes message, length delimited. Does not implicitly {@link license_protocol.FileHashes.verify|verify} messages.
         * @param message FileHashes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: license_protocol.IFileHashes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FileHashes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FileHashes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.FileHashes;

        /**
         * Decodes a FileHashes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FileHashes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.FileHashes;

        /**
         * Verifies a FileHashes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FileHashes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FileHashes
         */
        public static fromObject(object: { [k: string]: any }): license_protocol.FileHashes;

        /**
         * Creates a plain object from a FileHashes message. Also converts values to other types if specified.
         * @param message FileHashes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: license_protocol.FileHashes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FileHashes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FileHashes
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace FileHashes {

        /** Properties of a Signature. */
        interface ISignature {

            /** Signature filename */
            filename?: (string|null);

            /** Signature testSigning */
            testSigning?: (boolean|null);

            /** Signature SHA512Hash */
            SHA512Hash?: (Uint8Array|null);

            /** Signature mainExe */
            mainExe?: (boolean|null);

            /** Signature signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a Signature. */
        class Signature implements ISignature {

            /**
             * Constructs a new Signature.
             * @param [properties] Properties to set
             */
            constructor(properties?: license_protocol.FileHashes.ISignature);

            /** Signature filename. */
            public filename: string;

            /** Signature testSigning. */
            public testSigning: boolean;

            /** Signature SHA512Hash. */
            public SHA512Hash: Uint8Array;

            /** Signature mainExe. */
            public mainExe: boolean;

            /** Signature signature. */
            public signature: Uint8Array;

            /**
             * Creates a new Signature instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Signature instance
             */
            public static create(properties?: license_protocol.FileHashes.ISignature): license_protocol.FileHashes.Signature;

            /**
             * Encodes the specified Signature message. Does not implicitly {@link license_protocol.FileHashes.Signature.verify|verify} messages.
             * @param message Signature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: license_protocol.FileHashes.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Signature message, length delimited. Does not implicitly {@link license_protocol.FileHashes.Signature.verify|verify} messages.
             * @param message Signature message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: license_protocol.FileHashes.ISignature, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Signature message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): license_protocol.FileHashes.Signature;

            /**
             * Decodes a Signature message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Signature
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): license_protocol.FileHashes.Signature;

            /**
             * Verifies a Signature message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Signature message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Signature
             */
            public static fromObject(object: { [k: string]: any }): license_protocol.FileHashes.Signature;

            /**
             * Creates a plain object from a Signature message. Also converts values to other types if specified.
             * @param message Signature
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: license_protocol.FileHashes.Signature, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Signature to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Signature
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
