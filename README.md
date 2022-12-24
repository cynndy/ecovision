# ecoVision

# Domain URI: https://ecovision-backend.vercel.app

## API Routes for User
<table>
<thead>
    <tr>
        <th>Route</th>
        <th>Method</th>
        <th>Payload</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><code>/api/auth/signup</code></td>
        <td><code>POST</code></td>
        <td>
            <ul>
                <li><code>name</code></li>
                <li><code>email</code></li>
                <li><code>password</code></li>
            </ul>
        </td>
        <td>This is for user registration</td>
    </tr>
    <tr>
        <td><code>/api/auth/login</code></td>
        <td><code>POST</code></td>
        <td>
            <ul>
                <li><code>email</code></li>
                <li><code>password</code></li>
            </ul>
        </td>
        <td>This is for user login</td>
    </tr>
    <tr>
        <td><code>/api/auth/logout</code></td>
        <td><code>POST</code></td>
        <td></td>
        <td>This is for user logout</td>
    </tr>
</tbody>
<table>
<hr>

## Api Routes for Listings
<table>
<thead>
    <tr>
        <th>Route</th>
        <th>Method</th>
        <th>Payload</th>
        <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td><code>/api/listings</code></td>
        <td><code>GET</code></td>
        <td></td>
        <td>Fetch all listing records</td>
    </tr>
    <tr>
        <td><code>/api/listings</code></td>
        <td><code>POST</code></td>
        <td>
            <ul>
                <li><code>category</code> (string)</li>
                <li><code>title</code> (string)</li>
                <li><code>condition</code> (string)</li>
                <li><code>price</code> (number)</li>
                <li><code>description</code> (string)</li>
                <li><code>photos</code> (array of images)</li>
                <li><code>shipping</code> (string)</li>
                <li><code>payment</code> (string)</li>
            </ul>
        </td>
        <td>Add a listing</td>
    </tr>
    <tr>
        <td><code>/api/listings/{:id}</code></td>
        <td><code>GET</code></td>
        <td>
            <ul>
                <li><code>id</code> (string) - sample of unique id in firebase database <code>-NIz4gjbTT2lYsKVH4lL</code></li>
            </ul>
        </td>
        <td>Fetch a listing and get its details</td>
    </tr>
    <tr>
        <td><code>/api/listings/{:id}</code></td>
        <td><code>PUT</code></td>
        <td>
            <ul>
                <li><code>id</code> (string) - sample of unique id in firebase database <code>-NIz4gjbTT2lYsKVH4lL</code></li>
                <li><code>category</code> (string)</li>
                <li><code>title</code> (string)</li>
                <li><code>condition</code> (string)</li>
                <li><code>price</code> (number)</li>
                <li><code>description</code> (string)</li>
                <li><code>photos</code> (array of images)</li>
                <li><code>shipping</code> (string)</li>
                <li><code>payment</code> (string)</li>
            </ul>
        </td>
        <td>Find the listing based on the unique <code>id</code> and then <code>update</code> it</td>
    </tr>
    <tr>
        <td><code>/api/listings/{:id}</code></td>
        <td><code>DELETE</code></td>
        <td>
            <ul>
                <li><code>id</code> (string) - sample of unique id in firebase database <code>-NIz4gjbTT2lYsKVH4lL</code></li>
            </ul>
        </td>
        <td>Find the listing and then <code>delete</code> it</td>
    </tr>
</thead>
</tbody>
</table>
