export class HomePage {
  constructor(page, isMobile) {
    this.page = page;
    this.isMobile - isMobile;
    //

    /* langing page banner */
    this.getBonusButton = page.getByRole('button', { name: 'Ia-ți bonusul' });
    this.termsButton = page.getByRole('link', { name: 'Termeni și Condiții', exact: true });
    this.welcomeBonusText = page.getByText('Bonus de bun venit', { exact: true });
    this.bonusText = page.getByText('până la 2,000 RON + 150 RB in');

    /* switch language */
    this.switchLanguageModal = page.getByRole('button', { name: 'flag' });
    this.romanianLanguageOption = page.getByRole('button', { name: 'ro Română' });
    this.englishLanguageOption = page.getByRole('button', { name: 'en Engleză' });
    this.languageSelectText = page.getByText('Selectează Limba');
    this.closeLanguageModal = page.locator('#cdk-overlay-0').getByRole('button').first()

    /* chat modal */
    this.chatModal = page.getByRole('button', { name: 'logo' });
    this.chatModalTitle = page.frameLocator('iframe[title="Găsiți mai multe informații aici"]').getByTestId('widget-title');
    this.welcomeMessage = page.frameLocator('iframe[title="Găsiți mai multe informații aici"]').getByText('Welcome to Customer Support!');
    this.nameLabel = page.frameLocator('iframe[title="Găsiți mai multe informații aici"]').locator('label').filter({ hasText: 'Nume' }).locator('div');
    this.emailLabel = page.frameLocator('iframe[title="Găsiți mai multe informații aici"]').locator('label').filter({ hasText: 'E-mail' }).locator('div');
    this.messageLabel = page.frameLocator('iframe[title="Găsiți mai multe informații aici"]').locator('label').filter({ hasText: 'Mesaj' }).locator('div');
    this.startConversatioButton = page.frameLocator('iframe[title="Găsiți mai multe informații aici"]').getByTestId('button-ok');
    this.nameTextBox = page.frameLocator('iframe[title="Găsiți mai multe informații aici"]').getByLabel('Nume');
    this.emailTextBox = page.frameLocator('iframe[title="Găsiți mai multe informații aici"]').getByLabel('E-mail');
    this.messageTextBox = page.frameLocator('iframe[title="Găsiți mai multe informații aici"]').getByLabel('Mesaj');
    this.closeChatModalButton = page.frameLocator('iframe[title="Găsiți mai multe informații aici"]').getByLabel('Minimizare miniaplicație');
  }

  async checkCasinoTitle() {
    if(process.env.BASE_URL.includes('don')) {
      return 'Descoperă pariurile online și jocurile de cazinou online la DonRO';
    }
  }

  async openChatModal() {
    await this.chatModal.click();
  }

}