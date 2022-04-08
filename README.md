# react-router-dom v6 업그레이드

1. Switch가 사라지고, Routes 등장

   Routes는 기존 Switch처럼 경로를 순서를 기준으로 선택하는 것이 아닌, 가장 일치하는 라우트를 기반으로 선택하게 된다.

   기존 코드

   ```jsx
   <Switch>
     <Route path="/" ..... />
   </Switch>
   ```

   v6 코드

   ```jsx
   <Routes>
     <Route path="/" .....  />
   </Routes>
   ```

1. Route에 children이나 component가 사라지고, 대신에 element 사용

   기존코드

   ```jsx
   <Route path="/" exact component={HomePage} />
   <Route path="/login" exact>
       <LoginPage />
   </Route>
   ```

   ```jsx
   <Route path="/" element={<HomePage />} />
   <Route path="/login" element={<LoginPage />} />
   ```

1. 기존 Route는 꼭 Switch 안에 없어도 됐지만, v6의 Route는 Routes의 직속 자식이어야 한다.
1. Route에 exact Prop 사라짐 (exact가 기본으로 되어있다.)
