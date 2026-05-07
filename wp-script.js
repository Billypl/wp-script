// Iterate through all email list items
document.querySelectorAll('[role="option"]').forEach(emailItem => {
    const senderElement = emailItem.querySelector('.flex-sh_1');
    const senderText = senderElement?.textContent || "";

    const isFromWP = senderText.includes('/WP');
    if (!isFromWP) return;
    
    const checkboxButton = emailItem.querySelector('button[role="checkbox"]');
    if (checkboxButton) checkboxButton.click();
    // Highlight the email visually for easier debugging
    emailItem.style.backgroundColor = '#ffffcc';
});
