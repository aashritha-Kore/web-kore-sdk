declare class SpeechToTextPlugin {
    name: string;
    config: {
        isSpeechEnabled: boolean;
        allowGoogleSpeech: boolean;
    };
    pickerHTML: any;
    ttsAudioSource: any;
    recognition: any;
    isRecordingStarted: boolean;
    final_transcript: string;
    recognizing: boolean;
    prevStr: string;
    prevRange: any;
    navigator: any;
    isListening: boolean;
    mediaStream: any;
    mediaStreamSource: any;
    rec: any;
    _connection: any;
    intervalKey: any;
    context: any;
    _permission: boolean;
    sidToken: any;
    two_line: RegExp;
    one_line: RegExp;
    speechPrefixURL: string;
    userIdentity: any;
    bearerToken: any;
    assertionToken: any;
    hostInstance: any;
    constructor(config: {
        isSpeechEnabled?: boolean;
        allowGoogleSpeech?: boolean;
    });
    onHostCreate(): void;
    onInit(): void;
    appendPickerHTMLtoChatWindowFooter(pickerHTML: any): void;
    installSpeechToTextTemplate(): void;
    getSpeechToTextTemplateString(): string;
    bindEvents(): void;
    getSIDToken(): false | undefined;
    getSpeechToText(): void;
    startGoogleWebKitRecognization(): void;
    micEnable(): void;
    setCaretEnd(_this: any): void;
    isChrome(): boolean;
    success(e: any): void;
    startGoogleSpeech(): void;
    afterMicEnable(): void;
    cancel(): void;
    socketSend(item: {
        size: string | number;
        type: string;
    }): void;
    linebreak(s: string): string;
    capitalize(s: string): string;
    createSocket(): WebSocket;
    stop(): void;
}
export default SpeechToTextPlugin;