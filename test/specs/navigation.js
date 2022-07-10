describe('Homepage', function () {
  it('should load properly', function () {
    // load the page
    browser.url('./');

    // Get the title of the homepage, should be 'Conduit'
    console.log(browser.getTitle());
    if (browser.getTitle() !== 'Conduit') {
      // throw an error explaining what went wrong
      throw new Error('Title of the homepage should be "Conduit"');
    }

    // Click the 'Sign In' navigation link
    $('=Sign in').click();

    // Get the URL of the sign in page. It should include 'login'
    console.log(browser.getUrl());
    if (browser.getUrl() !== 'http://localhost:8080/login') {
      throw new Error('URL of "login" page should be correct');
    }
  });
});