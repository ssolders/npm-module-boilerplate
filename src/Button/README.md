## Button Component

Available props
```
@label [String] - The string displayed in the button
@disabled [Boolean] - Disabled or not
@isLoading [Boolean] - Should a spinner be displayed, indicating that something is loading
@additionalClasses [String] - Option to add your custom classes
```

Available event listeners
```
@onClickHandler[Function] - Callback for when button is clicked
```

### Example
```
import { Button } from 'payment-ui-components' }

<Button label='Continue' isLoading={false} onClickHandler={this.handleClick} />

<Button 
   label={translate('login', this)} 
   disabled={false} 
   additionalClasses='right btn-min-width' 
   isLoading={true} 
   onClickHandler={this.handleSubmit} />
```
