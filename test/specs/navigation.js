describe('Homepage', function () {
  it('should load properly', function () {
    // load the page
    browser.url('./');

    // Get the title of the homepage, should be 'Conduit'
    expect(browser).toHaveTitle('Conduit');

    // Click the 'Sign in' navigation link
    $('=Sign in').click();

    // Get the URL of the sign in page. It should include 'login'
    expect(browser).toHaveUrl('/login', { containing: true });

    // Click the 'Conduit' logo
    $('=conduit').click();

    // Get the URL of the sign in page. It should be the homepage
    expect(browser).toHaveUrl('', { containing: true });
  });
});