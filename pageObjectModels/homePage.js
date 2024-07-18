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

  }

  async checkCasinoTitle() {
    if(process.env.BASE_URL.includes('don')) {
      return 'Descoperă pariurile online și jocurile de cazinou online la DonRO';
    }
  }

}