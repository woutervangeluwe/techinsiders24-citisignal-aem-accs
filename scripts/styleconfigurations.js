window.styleConfiguration = {
  metadata: {
    brandName: "CitiSignal",
    version: "1.0.0",
    language: "en-US",
    namespace: "brand-concierge",
  },
  behavior: {
    multimodalCarousel: {
      cardClickAction: "openLink",
    },
    input: {
      enableVoiceInput: false,
      disableMultiline: true,
      showAiChatIcon: false,
    },
    chat: {
      messageAlignment: "normal",
      messageWidth: "100%",
    },
    privacyNotice: {
      title: "Privacy Notice",
      text: "Your use of this automated chatbot constitutes your consent that the personal information you provide in the chat session can be collected, used, disclosed, and retained by Adobe and service providers acting on Adobe's behalf in accordance with the Adobe {Privacy Policy}. Please do not provide sensitive personal information (such as financial or health information) in the chatbot.",
      links: [
        {
          text: "Privacy Policy",
          url: "https://www.adobe.com/privacy/policy.html",
        },
      ],
    },
    chatTranscript: {
      enabled: true,
      maxSessions: 1,
      maxMessagesPerSession: 20,
      cleanupInterval: 24
    },
    meetingForm: {
      fieldsPerRow: 2,
      fieldLayoutRules: {
        textInputs: {
          allowTwoColumns: true,
          fieldTypes: ["string", "email", "tel", "number"],
        },
        dropdowns: {
          allowTwoColumns: false,
          fieldTypes: ["select"],
          identifyBy: "hasOptions",
        },
        checkboxes: {
          allowTwoColumns: false,
          fieldTypes: ["boolean", "checkbox"],
        },
      },
      title: {
        text: "Schedule meeting",
        alignment: "left",
      },
      subtitle: {
        text: "I'd be happy to help you schedule a meeting! Please fill out the form below, and we'll follow up with a calendar to confirm your day and time.",
        alignment: "left",
      },
      buttons: {
        submit: {
          text: "Schedule meeting",
          alignment: "left",
        },
        cancel: {
          text: "Cancel",
          alignment: "left",
        },
      },
    },
    calendarWidget: {
      title: {
        text: "Book a meeting",
        alignment: "left",
      },
      subtitle: {
        text: "Thanks! Here's a calendar where you can choose a time that works best for your schedule:",
        alignment: "left",
      },
      postTitle: {
        text: "Once confirmed, you'll receive a calendar invite with all the details. The specialist will already have this conversation context, so no need to repeat anything. Looking forward to connecting you with the right expert!",
        alignment: "left",
      },
      buttons: {
        confirm: {
          text: "Schedule a meeting",
          alignment: "left",
        },
        cancel: {
          text: "Cancel",
          alignment: "left",
        },
      },
    },
    productCard: { actionButtonSize: "S" },
  },
  disclaimer: {
    text: "AI responses may be inaccurate. Check answers and sources. {Terms}",
    links: [
      {
        text: "Terms",
        url: "https://www.adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html",
      },
    ],
  },
  text: {
    "welcome.heading": "Explore what you can do with CitiSignal",
    "welcome.subheading":
      "Choose an option or tell us what interests you and we'll point you in the right direction.",
    "input.placeholder": "Tell us what you'd like to do or create",
    "input.messageInput.aria": "Message input",
    "input.send.aria": "Send message",
    "input.aiChatIcon.tooltip": "Ask AI",
    "input.mic.aria": "Voice input",
    "card.aria.select": "Select example message",
    "carousel.prev.aria": "Previous cards",
    "carousel.next.aria": "Next cards",
    "scroll.bottom.aria": "Scroll to bottom",
    "error.network":
      "I'm sorry, I'm having trouble connecting to our services right now.",
    "loading.message": "Generating response from our knowledge base",
    "feedback.dialog.title.positive": "Your feedback is appreciated",
    "feedback.dialog.title.negative": "Your feedback is appreciated",
    "feedback.dialog.question.positive":
      "What went well? Select all that apply.",
    "feedback.dialog.question.negative":
      "What went wrong? Select all that apply.",
    "feedback.dialog.notes": "Notes",
    "feedback.dialog.submit": "Submit",
    "feedback.dialog.cancel": "Cancel",
    "feedback.dialog.notes.placeholder": "Additional notes (optional)",
    "feedback.toast.success": "Thank you for the feedback.",
    "feedback.thumbsUp.aria": "Thumbs up",
    "feedback.thumbsDown.aria": "Thumbs down",
  },
  arrays: {
    "welcome.examples": [
      //{
      //  text: "Personalization at scale",
      //  image:
      //    "https://business.adobe.com/media_1f9cb9d59cf341dfdf53ce12ac34c02075253e9f7.png?width=2000&format=webply&optimize=medium",
      //  backgroundColor: "#FFFFFF",
      //},
      //{
      //  text: "Unified customer experience",
      //  image:
      //    "https://business.adobe.com/media_13b8aa5dca19cdd998cecb707db107f22e52f4474.png?width=2000&format=webply&optimize=medium",
      //  backgroundColor: "#FFFFFF",
      //},
      //{
      //  text: "B2B GTM Orchestration",
      //  image:
      //    "https://business.adobe.com/solutions/content-supply-chain/media_147fbf4920e6251287ef939d4d8bc8b1ba0ff9371.png?width=2000&format=webply&optimize=medium",
      //  backgroundColor: "#FFFFFF",
      //},
      //{
      //  text: "Marketo engage",
      //  image:
      //    "https://main--milo--adobecom.aem.page/drafts/methomas/assets/media_16c2ca834ea8f2977296082ae6f55f305a96674ac.png",
      //  backgroundColor: "#FFFFFF",
      //},
    ],
    "feedback.positive.options": [
      "Helpful and relevant recommendations",
      "Clear and easy to understand",
      "Friendly and conversational tone",
      "Visually appealing presentation",
      "Other",
    ],
    "feedback.negative.options": [
      "Not helpful or relevant",
      "Confusing or unclear",
      "Too formal or robotic",
      "Poor visual presentation",
      "Other",
    ],
  },
  assets: {
    icons: {
      company: "",
    },
  },
  theme: {
    "--welcome-input-order": "3",
    "--welcome-cards-order": "2",
    "--font-family": "'Adobe Clean', adobe-clean, 'Trebuchet MS', sans-serif",
    "--color-primary": "#007bff",
    "--color-text": "#131313",
    "--line-height-body": "1.75",
    "--main-container-background":
      "linear-gradient(122.87deg, #E1E9FF 20.72%, #EFE3FA 34.96%, #F5DFF8 42.08%, #FCDCF5 49.2%, #FFDEC3 91.6%)",
    "--input-height": "52px",
    "--input-height-mobile": "52px",
    "--input-border-radius": "12px",
    "--input-border-radius-mobile": "12px",
    "--input-background": "#FFFFFF",
    "--input-outline-color":
      "linear-gradient(98.11deg, #9A3CF9 -4.21%, #E743C8 35.46%, #ED457E 68.67%, #FF7918 104.7%)",
    "--input-outline-width": "2px",
    "--input-box-shadow": "0 4px 16px 0 #00000029",
    "--input-focus-outline-width": "2px",
    "--input-focus-outline-color": "#4B75FF",
    "--input-font-size": "16px",
    "--input-text-color": "#292929",
    "--input-button-height": "32px",
    "--input-button-width": "32px",
    "--submit-button-fill-color": "#FFFFFF",
    "--submit-button-fill-color-disabled": "#C6C6C6",
    "--color-button-submit": "#292929",
    "--color-button-submit-hover": "#292929",
    "--input-button-border-radius": "8px",
    "--button-disabled-background": "#FFFFFF",
    "--disclaimer-color": "#4B4B4B",
    "--disclaimer-font-size": "12px",
    "--disclaimer-font-weight": "400",
    "--message-user-background": "#EBEEFF",
    "--message-user-text": "#292929",
    "--message-border-radius": "10px",
    "--message-padding": "8px 16px",
    "--message-concierge-background": "#FFFFFF",
    "--message-concierge-text": "#292929",
    "--message-max-width": "100%",
    "--chat-interface-max-width": "768px",
    "--message-blocker-height": "105px",
    "--citations-text-font-weight": "700",
    "--citations-desktop-button-font-size": "14px",
    "--feedback-icon-btn-background": "#FFFFFF",
    "--feedback-icon-btn-hover-background": "#FFFFFF",
    "--feedback-icon-btn-size-desktop": "32px",
    "--feedback-container-gap": "4px",
    "--multimodal-card-box-shadow": "none",
    "--border-radius-card": "16px",
    "--button-height-s": "30px",
    "--button-primary-background": "#3B63FB",
    "--button-primary-text": "#FFFFFF",
    "--button-primary-hover": "#274dea",
    "--button-secondary-border": "#2C2C2C",
    "--button-secondary-text": "#2C2C2C",
    "--button-secondary-hover": "#000",
    "--color-button-secondary-hover-text": "#FFFFFF",
    "--privacy-notice-background": "#FFFFFF",
    "--privacy-notice-padding": "10px 12px",
    "--privacy-notice-text-font-size": "12px",
    "--privacy-notice-title-font-size": "12px",
    "--message-concierge-link-decoration": "underline",
  },
};
