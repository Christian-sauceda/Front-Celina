import { AppRouter } from "./routes"
import { AppTheme } from "./theme"

export const CelinaApp = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  )
}
