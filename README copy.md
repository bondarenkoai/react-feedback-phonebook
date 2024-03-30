## react-feedback-phonebook

### Task:

1. The repository react-components has been created.
2. When submitting homework, there are two links provided: one to the source files and the other to the working pages of each task on GitHub Pages.
3. There are no errors or warnings present when running the code of the task in the console.
4. Each component has its own file in the src/components directory.
5. Everything that the component expects as props is passed to it during invocation.
6. The JavaScript code is clean and understandable, and Prettier is used.
7. Styling is done using CSS modules or Styled Components.

### ✅ Social media profile:

It is necessary to create the `<Profile>` component, through which we could display information
about a social media user. User data is stored in the user.json file.

Description of the `<Profile>` component:

The component should accept several props with user information:

`username` - user's name  
`tag` - tag in the social network without @  
`location` - city and country  
`avatar` - link to the image  
`stats` - object with activity informatio

The component should create a DOM element with the following structure.

```
<div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>
  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
```

> Usage example: import user from 'path/to/user.json;

```
<Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
/>
```

### ✅ Statistics section:

Create the `<Statistics>` component, which would display statistics from the passed props. For
example, file downloads by type, website visits by users from different countries, financial
expenses, etc.

The component should accept two props title and stats, which specify the title and the statistics
object.

`title` - optional, and if it is not passed, the `<h2>` header markup should not be rendered.  
`stats` - an array of objects containing information about the statistics item.

It can have any number of elements. Background color of the statistics item in the design can be
skipped or a function can be created to generate a random color. The component should create a DOM
element with the following structure:

```jsx
<section class="statistics">
    <h2 class="title">Upload stats</h2>

    <ul class="stat-list">
        <li class="item">
            <span class="label">.docx</span>
            <span class="percentage">4%</span>
        </li>
        <li class="item">
            <span class="label">.mp3</span>
            <span class="percentage">14%</span>
        </li>
        <li class="item">
            <span class="label">.pdf</span>
            <span class="percentage">41%</span>
        </li>
        <li class="item">
            <span class="label">.mp4</span>
            <span class="percentage">12%</span>
        </li>
    </ul>
</section>
```

> Usage example: import data from '/path/to/data.json';

```
<Statistics title="Upload stats" stats={data} />
<Statistics stats={data} />
```

### ✅ Friends list:

It is necessary to create the `<FriendList>` component, through which we could display information
about the user's friends. Information about friends is stored in the friends.json file.

Description of the `<FriendList>` component: The component should accept one prop friends - an array
of friend objects.

The component should create DOM with the following structure:

```
<ul class="friend-list">
  <!-- Any number of FriendListItem -->
</ul>
```

Description of the `<FriendListItem>` component: The component should accept several props:

`avatar` - link to the avatar  
`name` - friend's name  
`isOnline` - a boolean indicating the friend's  
`status` - online or not

Depending on the isOnline prop, the background color of span.status should change. This can be done
using different CSS classes or Styled Components.

The component should create DOM with the following structure:

```
<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="User avatar" width="48" />
  <p class="name"></p>
</li>
```

```
import friends from 'path/to/friends.json';

<FriendList friends={friends} />;
```

### ✅ Transaction history:

It is necessary to create a component for transaction history in the personal account of an internet
bank.

The data for the list is available in JSON format in the transactions.json file. It is an array of
objects, where each object describes one transaction with the following properties:

`id` - unique transaction identifier  
`type` - transaction type  
`amount` - transaction amount  
`currency` - currency type

Description of the `<TransactionHistory>` component:

It is necessary to create the `<TransactionHistory>` component, which accepts one prop items - an
array of transaction objects from transactions.json. The component creates a table layout. Each
transaction is a table row. The markup of two transactions is shown in the example.

```
<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
```

> Usage example:

```
import transactions from 'path/to/transactions.json';

<TransactionHistory items={transactions} />;
```

`Branches:`

> Total: 14 hrs 18 mins => main

`Languages:`

> JavaScript - 8h 58m (62.73%)  
> CSS - 2h 35m (18.13%)  
> JSON - 2h 6m (14.74%)  
> Markdown - 31m (3.71%)  
> Git Config - 3m (0.42%) Other - 1m (0.19%)
