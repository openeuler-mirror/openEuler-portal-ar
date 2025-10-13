export default {
  ar: {
    instruction: {
      title: 'Note',
      text_1: 'If you have any issues or requirements, submit them through ',
      link_text: 'QuickIssue',
      link: 'https://quickissue.openeuler.org/en/issues/',
      text_2: '.',
    },
    chats: [
      {
        question:
          'Q: Where can I find tutorials or documents for in-place upgrade?',

        answers: [
          {
            text: 'A: We offer learning materials in the form of documents.',

            isLink: false,

            link: '',
          },

          {
            text: ' Refer to the',

            isLink: false,

            link: '',
          },

          {
            text: 'x2openEuler User Guide',

            isLink: true,

            link: 'https://docs.openeuler.org/en/docs/20.03_LTS_SP1/docs/x2openEuler/Introduction.html',
          },

          {
            text: ' for details.',

            isLink: false,

            link: '',
          },
        ],
      },

      {
        question: 'Q: Does x2openEuler support VM upgrade?',

        answers: [
          {
            text: 'A: Yes, x2openEuler supports upgrades for both VMs and physical machines.',

            isLink: false,

            link: '',
          },
        ],
      },

      {
        question:
          'Q: Which OSs are supported by x2openEuler in-place upgrades?',

        answers: [
          {
            text: 'A: For details, see the',

            isLink: false,

            link: '',
          },

          {
            text: 'x2openEuler User Guide.',

            isLink: true,

            link: 'https://docs.openeuler.org/en/docs/20.03_LTS_SP1/docs/x2openEuler/Introduction.html',
          },
        ],
      },

      {
        question:
          'Q: How do I handle exceptions that occur during the upgrade?',

        answers: [
          {
            text: 'A: Exceptions can occur during in-place upgrades. For specific troubleshooting operations, refer to FAQs in the',

            isLink: false,

            link: '',
          },

          {
            text: 'x2openEuler User Guide',

            isLink: true,

            link: 'https://docs.openeuler.org/en/docs/20.03_LTS_SP1/docs/x2openEuler/Introduction.html',
          },

          {
            text: '. If there are no details related to your system, you can submit an issue through',

            isLink: false,

            link: '',
          },

          {
            text: 'QuickIssue',

            isLink: true,

            link: 'https://quickissue.openeuler.org/en/new-issues/',
          },

          {
            text: ' to ask for support and track the resolution.',

            isLink: false,

            link: '',
          },
        ],
      },

      {
        question:
          'Q: Can I roll back the migration if an exception causes an upgrade operation to fail?',

        answers: [
          {
            text: 'A: Yes, you can roll back the migration using x2openEuler. For details, see the',
            isLink: false,
            link: '',
          },
          {
            text: 'x2openEuler User Guide.',

            isLink: true,

            link: 'https://docs.openeuler.org/en/docs/20.03_LTS_SP1/docs/x2openEuler/Introduction.html',
          },
        ],
      },

      {
        question:
          'Q: How does openEuler do compatibility tests with hardware vendors? Do compatibility tests incur additional charges?',

        answers: [
          {
            text: 'A: These tests are free for community members. Details can be found in the',

            isLink: false,

            link: '',
          },

          {
            text: 'Overall Introduction to the openEuler Hardware Compatibility Test',

            isLink: true,

            link: 'https://www.openeuler.org/en/compatibility/hardware/',
          },

          {
            text: ', and you can also join the compatibility SIG or the openEuler innovation center.',

            isLink: false,

            link: '',
          },

          {
            text: ' For further details, see the',

            isLink: false,

            link: '',
          },

          {
            text: 'Compatibility List.',

            isLink: true,

            link: 'https://www.openeuler.org/en/compatibility/',
          },
        ],
      },
    ],
  },
};
