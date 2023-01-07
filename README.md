# css-auto-transition
A js helper function that helps create CSS **transitions from**  and **to** the value of **auto**


![alt text](https://raw.githubusercontent.com/DanielProp/css-auto-transition/main/example/example.gif)

# Demo 

You can find a demo [**here**](https://danielprop.github.io/css-auto-transition/).

# Usage

* **Import file in \<head\>**

    ```html 
    <script src="..\src\css-auto-transition-min.js"></script>`
    ```
* **Set a regular CSS transition**
    ```css
    .overlay{
        transition: all 1s ease-in-out;
    }
    ```
* **Add attributes to the element you want to animate**
    * `auto-transition`: String with "property from to" values separated by spaces. Property can be "height" or "width". From/to can be "auto" or regular CSS supported units.
    * `auto-transition-trigger`: (Optional) String selector for the element that will trigger the transition on hover. If omitted, the trigger will be this element.
    ```html
    <div class="overlay" auto-transition="height auto 100%" auto-transition-trigger="#fromAuto">
        (...)
    </div>
    ```


